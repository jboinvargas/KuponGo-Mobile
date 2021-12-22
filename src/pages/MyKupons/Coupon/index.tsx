/* eslint-disable import/no-duplicates */
import React, { useMemo, memo } from 'react'
import { ptBR } from 'date-fns/locale'
import { formatDistance, isBefore, parseISO } from 'date-fns'
import { CouponTypes } from '..'
import {
  Container,
  ImagePromotion,
  InfoKupon,
  TextPerc,
  TextPromotion,
  TextExpire,
  TextAvailable,
  TextRed,
} from './styles'
import mcLogo from '../../../assets/mcdonalds.png'

type CouponProps = {
  coupon: CouponTypes
}

const Coupon = ({ coupon }: CouponProps) => {
  const validateTime = useMemo(() => {
    if (
      isBefore(parseISO(coupon.promotion.finish_time), new Date(Date.now())) ===
      true
    ) {
      return 'Expirado'
    }
    const promotionDuration = formatDistance(
      parseISO(coupon.promotion.finish_time),
      new Date(),
      {
        locale: ptBR,
      },
    )
    return promotionDuration
  }, [coupon.promotion])

  const availableCoupons = useMemo(
    () => coupon.promotion.quantity - coupon.promotion.used_quantity,
    [coupon.promotion],
  )

  return (
    <Container>
      <ImagePromotion
        resizeMode="cover"
        source={
          coupon.promotion.store?.avatar_url
            ? { uri: coupon.promotion.store.avatar_url }
            : mcLogo
        }
      />
      <InfoKupon>
        <TextPerc>{`${coupon.promotion?.product_discount}% OFF`}</TextPerc>
        <TextPromotion>{coupon.promotion.store?.name}</TextPromotion>
        <TextExpire>
          {validateTime !== 'Expirado' && 'Expira em'}
          <TextRed> {validateTime}</TextRed>
        </TextExpire>

        <TextAvailable>
          Cupons disponíveis
          <TextRed> {availableCoupons}</TextRed>
        </TextAvailable>
      </InfoKupon>
    </Container>
  )
}

export default memo(Coupon)
