import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconMI from 'react-native-vector-icons/MaterialCommunityIcons'
import { ThemeContext } from 'styled-components'

import { Alert, Modal } from 'react-native'
import { format, parseISO } from 'date-fns'
import { CouponTypes } from '../MyKupons'

import * as S from './styles'

import ImgStar from '../../assets/starWallet/starWallet.png'
import api from '../../services/api'
import Notification from './NotificationCard'

const Wallet: React.FC = () => {
  const [coupons, setCoupons] = useState<CouponTypes[]>([])
  const [allCoupons, setAllCoupons] = useState<CouponTypes[]>([])
  const [selectedCoupon, setSelectedCoupon] = useState<CouponTypes>(
    {} as CouponTypes,
  )
  const [modalVisible, setModalVisible] = useState(false)
  const { title } = useContext(ThemeContext)
  const navigation = useNavigation()

  const getUsedCoupons = useCallback(async () => {
    const promisseUsedCoupons = api.get<CouponTypes[]>('kupons/wallet')
    const promisseAllCoupons = api.get<CouponTypes[]>('kupons')

    const response = await Promise.all([
      promisseUsedCoupons,
      promisseAllCoupons,
    ])

    setCoupons(response[0].data)
    setAllCoupons(
      response[1].data.filter(coupon => coupon.status !== 'available'),
    )
  }, [])

  useEffect(() => {
    getUsedCoupons()
  }, [getUsedCoupons])

  const usedCoupons = useMemo(() => coupons.length, [coupons])

  const moneySaved = useMemo(
    () =>
      coupons.reduce((acc: number, next: CouponTypes) => {
        const discount =
          (Number(next.promotion.product_price) / 100) *
          Number(next.promotion.product_discount)
        acc += discount

        return acc
      }, 0),
    [coupons],
  )

  function handleSelectedCoupon(coupon: CouponTypes) {
    setSelectedCoupon(coupon)
  }

  const selectedCouponSaved = useMemo(
    () =>
      (Number(selectedCoupon.promotion?.product_price) / 100) *
        Number(selectedCoupon.promotion?.product_discount) || 0,
    [selectedCoupon.promotion],
  )

  const selectedCouponSpent = useMemo(
    () =>
      Number(selectedCoupon.promotion?.product_price) - selectedCouponSaved ||
      0,
    [selectedCoupon.promotion, selectedCouponSaved],
  )

  console.log(selectedCoupon)

  const formattedDate = useMemo(() => {
    if (selectedCoupon?.use_date) {
      return format(parseISO(selectedCoupon?.use_date), 'HH:mm - dd MMM, yyyy')
    }

    return 'Expirou'
  }, [selectedCoupon])

  return (
    <S.Container>
      <S.Head>
        <S.Button onPress={() => navigation.navigate('Dashboard')}>
          <Icon
            name="chevron-left"
            size={26}
            color={title === 'light' ? '#999' : '#fff'}
          />
        </S.Button>
        <S.Title>Carteira</S.Title>
      </S.Head>
      <S.Body>
        <S.ImageStar source={ImgStar} resizeMode="cover" />
        <S.ViewEconomy>
          <S.TextEconomy>Você economizou</S.TextEconomy>
          <S.TextEconomyValue>R$ {moneySaved}</S.TextEconomyValue>
        </S.ViewEconomy>
        <S.ViewPoints>
          <S.TextPoint>KUPONs usados</S.TextPoint>
          <S.TextPointValue>{usedCoupons}</S.TextPointValue>
        </S.ViewPoints>
      </S.Body>
      <S.TextTransaction>Transações</S.TextTransaction>
      <S.Items>
        {!!allCoupons &&
          allCoupons.map(coupon => (
            <Notification
              key={coupon.id}
              openModal={setModalVisible}
              handleSelectedCoupon={handleSelectedCoupon}
              coupon={coupon}
            />
          ))}
      </S.Items>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}
      >
        <S.CenteredView>
          <S.ModalView>
            <S.CloseButton
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Icon
                name="x"
                size={26}
                color={title === 'light' ? '#333' : '#fff'}
              />
            </S.CloseButton>
            <S.ImagePromotion
              source={{
                uri: selectedCoupon.promotion?.avatar_url,
              }}
            />

            <S.ModalContent>
              <S.ModalTitle>
                {selectedCoupon.promotion?.store.name}
              </S.ModalTitle>

              <S.ModalSubtitle>Detalhes da compra</S.ModalSubtitle>

              <S.DetailsRow>
                <S.Left>
                  <IconMI
                    style={{ marginRight: 12 }}
                    name="clock-time-eight-outline"
                    size={28}
                    color={title === 'light' ? '#CF1717' : '#fff'}
                  />
                  <S.RowText>Data</S.RowText>
                </S.Left>
                <S.Right>
                  <S.RowText>{formattedDate}</S.RowText>
                </S.Right>
              </S.DetailsRow>

              <S.DetailsRow>
                <S.Left>
                  <IconFA
                    style={{ marginRight: 12 }}
                    name="credit-card"
                    size={26}
                    color={title === 'light' ? '#CF1717' : '#fff'}
                  />
                  <S.RowText>Gastou</S.RowText>
                </S.Left>
                <S.Right>
                  <S.RowText>
                    {selectedCoupon.status === 'used'
                      ? selectedCouponSpent
                      : '---'}
                  </S.RowText>
                </S.Right>
              </S.DetailsRow>

              <S.DetailsRow>
                <S.Left>
                  <IconMI
                    style={{ marginRight: 12 }}
                    name="cash-usd-outline"
                    size={28}
                    color={title === 'light' ? '#CF1717' : '#fff'}
                  />
                  <S.RowText style={{ textAlign: 'left' }}>
                    Economizou
                  </S.RowText>
                </S.Left>
                <S.Right>
                  <S.RowText>
                    {selectedCoupon.status === 'used'
                      ? selectedCouponSaved
                      : '---'}
                  </S.RowText>
                </S.Right>
              </S.DetailsRow>

              <S.HelpButton>
                <S.ButtonText>Precisa de ajuda ?</S.ButtonText>
                <S.HelpIcon
                  name="help-circle-outline"
                  size={26}
                  color={title === 'light' ? '#CF1717' : '#fff'}
                />
              </S.HelpButton>
            </S.ModalContent>
          </S.ModalView>
        </S.CenteredView>
      </Modal>
    </S.Container>
  )
}

export default Wallet
