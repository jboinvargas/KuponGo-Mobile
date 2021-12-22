import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Alert, Modal, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { formatDistanceToNowStrict, isBefore, parseISO } from 'date-fns'
import { ThemeContext } from 'styled-components'

import {
  Container,
  StoreView,
  Header,
  Logo,
  Title,
  StoreInformation,
  StoreInformationView,
  Address,
  OpeningHours,
  PromotionsView,
  PromotionsTitle,
  PromotionsList,
  Kupon,
  KuponTitle,
  KuponImage,
  KuponTextContainer,
  KuponValidationTime,
  KuponTime,
  NumberOfKuponsAvailable,
  CatchView,
  CatchViewText,
  Icon,
  ModalCenteredView,
  ModalView,
  ModalLogo,
  ModalTitle,
  ModalDescription,
  ModalInfoContainer,
  ModalStoreName,
  ModalPromotionExpires,
  ModalProductDescription,
  ModalInfoKupon,
  ModalCatchKupon,
  ModalCatchKuponText,
} from './styles'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'

interface Store {
  id: string
  name: string
  latitude: number
  longitude: number
  cnpj: string
  zip_code: string
  state: string
  city: string
  district: string
  street: string
  number: string
  phone: string
  status: string
  opening_hours: string
  avatar_url: string
}

export interface Promotion {
  id: string
  employee_id: string
  store_id: string
  name: string
  description: string
  start_time: string
  finish_time: string
  product_price: number
  product_discount: number
  quantity: number
  used_quantity: number
  type: string
}

interface RouteParams {
  store: Store
}

const Store: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const { token } = useAuth()
  const route = useRoute()
  const { navigate } = useNavigation()
  const routeParams = route.params as RouteParams

  const [store, setStore] = useState(routeParams.store)
  const [promotions, setPromotions] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion>()

  useEffect(() => {
    api.get(`promotions/${store.id}`).then(response => {
      setPromotions(response.data)
    })
  }, [store.id])

  const validateTime = useCallback((date: Date) => {
    if (isBefore(date, new Date(Date.now())) === true) {
      return 'A promoção acabou'
    }
    const promotionDuration = formatDistanceToNowStrict(new Date(date))
    return promotionDuration
  }, [])

  const handleCatchKupon = useCallback(
    async (promotion_id: string) => {
      try {
        const result = await api.post(`/kupons/${promotion_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        console.log(result.data, 'result kupons')
        navigate('Coupon')
      } catch (err) {
        console.log(err)
        Alert.alert(
          'Erro ao capturar o Kupon',
          'Ocorreu ao tentar capturar o Kupon, tente novamente',
        )
      }
    },
    [token, navigate],
  )

  const handleSelectPromotion = useCallback((promotion: Promotion) => {
    setSelectedPromotion(promotion)
  }, [])

  return (
    <Container>
      <StoreView>
        <Header>
          <Title>{store.name}</Title>
        </Header>

        <Logo source={{ uri: store.avatar_url }} />
        <StoreInformation>
          <StoreInformationView>
            <Icon name="map-pin" size={12} color="#666" />
            <Address>{`${store.street}, ${store.number}, ${store.city}, ${store.state}`}</Address>
          </StoreInformationView>
          <StoreInformationView>
            <Icon name="clock" size={12} color="#666" />
            <OpeningHours>{`${store.opening_hours}`}</OpeningHours>
          </StoreInformationView>
        </StoreInformation>
      </StoreView>
      <PromotionsView>
        <PromotionsTitle>Promoções disponíveis</PromotionsTitle>
        <PromotionsList
          data={promotions}
          keyExtractor={promotion => promotion.id}
          renderItem={({ item: promotion }) => (
            <Kupon
              onPress={() => {
                handleSelectPromotion(promotion)
                setModalVisible(true)
              }}
            >
              <KuponImage source={{ uri: store.avatar_url }} />
              <KuponTextContainer>
                <KuponTitle>{`${promotion.product_discount}% ${promotion.name}`}</KuponTitle>
                <KuponValidationTime>
                  Válido por:
                  <KuponTime>
                    {` ${validateTime(parseISO(promotion.finish_time))}`}
                  </KuponTime>
                </KuponValidationTime>
                <NumberOfKuponsAvailable>
                  {`${promotion.quantity} Kupons disponíveis`}
                </NumberOfKuponsAvailable>
              </KuponTextContainer>
              <CatchView>
                <CatchViewText>Pegar</CatchViewText>
              </CatchView>
            </Kupon>
          )}
        />
      </PromotionsView>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}
      >
        <ModalCenteredView>
          <ModalView>
            <TouchableOpacity
              style={{ position: 'absolute', right: 10, top: 10 }}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Icon
                name="x"
                size={30}
                color={title === 'dark' ? '#fff' : '#0d0d0d'}
              />
            </TouchableOpacity>
            {selectedPromotion !== undefined && (
              <>
                <ModalLogo source={{ uri: store.avatar_url }} />

                <ModalTitle>{`${selectedPromotion.product_discount}% OFF`}</ModalTitle>
                <ModalDescription>{`${selectedPromotion.description}`}</ModalDescription>

                <ModalInfoContainer>
                  <ModalStoreName>{store.name}</ModalStoreName>
                  <ModalPromotionExpires>
                    {`Expira em ${validateTime(
                      parseISO(selectedPromotion.finish_time),
                    )}`}
                  </ModalPromotionExpires>

                  <ModalProductDescription>
                    Pizza grande Supreme: uma combinação perfeita de pepperoni,
                    cebola, pimentão, carnes selecionadas e mussarela.
                  </ModalProductDescription>
                  <ModalInfoKupon>
                    Você pegará 10% de desconto na compra do seu lanche no
                    PizzaHut. Quando você for a loja, abra a sua mochila de
                    cupons no menu “Meus cupons” para apresentar o código da
                    promoção e usar o desconto.
                  </ModalInfoKupon>
                </ModalInfoContainer>
                <ModalCatchKupon
                  onPress={() => {
                    handleCatchKupon(selectedPromotion.id)
                    setModalVisible(!modalVisible)
                  }}
                >
                  <ModalCatchKuponText>PEGAR DESCONTO</ModalCatchKuponText>
                </ModalCatchKupon>
              </>
            )}
          </ModalView>
        </ModalCenteredView>
      </Modal>
    </Container>
  )
}

export default Store
