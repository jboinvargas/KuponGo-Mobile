import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'

import { isBefore, parseISO } from 'date-fns'
import {
  Container,
  Head,
  Body,
  ItensContainer,
  Itens,
  Title,
  TextBody,
  TextCountBag,
  Button,
} from './styles'
import api from '../../services/api'
import Coupon from './Coupon'

type Promotion = {
  id: string
  name: string
  description: string
  finish_time: string
  product_price: string
  product_discount: string
  quantity: number
  used_quantity: number
  avatar_url: string
  store: Store
}

type Store = {
  id: string
  name: string
  avatar_url: string
}

export type CouponTypes = {
  id: string
  status: string
  use_date: string
  promotion: Promotion
}

const MyKupons: React.FC = () => {
  const [coupons, setCoupons] = useState<CouponTypes[]>([])
  const { title } = useContext(ThemeContext)
  const navigation = useNavigation()

  useEffect(() => {
    api.get('kupons').then(res => setCoupons(res.data))
  }, [])

  const availableCoupons = useMemo(
    () =>
      coupons.filter(
        coupon =>
          isBefore(
            parseISO(coupon.promotion.finish_time),
            new Date(Date.now()),
          ) === true,
      ),

    [coupons],
  )

  return (
    <Container>
      <Head>
        <Button onPress={() => navigation.navigate('Dashboard')}>
          <Icon
            name="chevron-left"
            size={26}
            color={title === 'light' ? '#0d0d0d' : '#fff'}
          />
        </Button>
        <Title>Meus Kupons</Title>
      </Head>
      <Body>
        <TextBody>
          {coupons.length >= 6 &&
            'Sua mochila está cheia, utilize seus Kupons para ganhar pontos e aumentar seu espaço.'}
        </TextBody>
        <TextCountBag>
          {coupons.length}
          /6
        </TextCountBag>
      </Body>
      <ItensContainer>
        <Itens>
          {!!coupons.length &&
            coupons.map(coupon => <Coupon key={coupon.id} coupon={coupon} />)}
        </Itens>
      </ItensContainer>
    </Container>
  )
}

export default MyKupons
