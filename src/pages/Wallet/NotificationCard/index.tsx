import React, { useCallback, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'

import {
  Container,
  LeftContent,
  ImagePromotion,
  ViewNotification,
  TextStore,
  TextStoreCategory,
  ViewActions,
  TextValue,
  TextMessage,
  TextPoints,
} from './styles'

import { CouponTypes } from '../../MyKupons'

type INotificationProps = {
  coupon: CouponTypes
  openModal: (arg0: boolean) => void
  handleSelectedCoupon: (coupon: CouponTypes) => void
}

const NotificationCard = ({
  coupon,
  openModal,
  handleSelectedCoupon,
}: INotificationProps) => {
  const discount = useMemo(
    () =>
      (Number(coupon.promotion.product_price) / 100) *
      Number(coupon.promotion.product_discount),
    [coupon.promotion],
  )

  const handleClickCoupon = useCallback(() => {
    handleSelectedCoupon(coupon)
    openModal(true)
  }, [openModal, coupon, handleSelectedCoupon])

  return (
    <TouchableOpacity onPress={handleClickCoupon}>
      <Container>
        <LeftContent>
          <ImagePromotion
            source={{
              uri: coupon.promotion.store.avatar_url,
            }}
          />
          <ViewNotification>
            <TextStore>{coupon.promotion.store.name}</TextStore>
            <TextStoreCategory>{coupon.promotion.name}</TextStoreCategory>
          </ViewNotification>
        </LeftContent>

        <ViewActions>
          <TextValue status={coupon.status}>
            {coupon.status === 'used' ? `+R$ ${discount}` : `Expirou`}
          </TextValue>
          <TextMessage>
            {coupon.status === 'used' ? `Economizou` : `Que pena!`}
          </TextMessage>
          {/* <TextPoints>+10 pts</TextPoints> */}
        </ViewActions>
      </Container>
    </TouchableOpacity>
  )
}

export default NotificationCard
