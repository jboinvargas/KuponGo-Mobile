/* eslint-disable global-require */
import React, { useCallback, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import LottieView from 'lottie-react-native'

import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'
import { FormHandles } from '@unform/core'
import { Alert } from 'react-native'
import * as Yup from 'yup'
import {
  Container,
  Container1,
  Head,
  Body,
  Title,
  TextRed,
  TextName,
  BackButton,
  Border,
} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { Promotion } from '../Store'

interface SpecialPromotionFormData {
  promotion_id: string
}

const PromotionCode: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { title } = useContext(ThemeContext)
  const { token } = useAuth()
  const navigation = useNavigation()

  const handleSubmit = useCallback(
    async (data: SpecialPromotionFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          promotion_id: Yup.string().uuid().required('Código obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const response = await api.get<Promotion>(
          `/showPromotion/${data.promotion_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        if (response.data.type === 'special') {
          try {
            await api.post(`/kupons/${data.promotion_id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })

            navigation.navigate('Coupon')
          } catch (error) {
            Alert.alert(
              'Código inválido',
              'Ocorreu ao confirmar o código, cheque as credenciais',
            )
          }
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        Alert.alert(
          'Erro na autenticação',
          `Ocorreu um erro ao validar o código, cheque as credenciais. ${err.message}`,
        )
      }
    },
    [navigation, token],
  )

  return (
    <Container>
      <Head>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={24}
            color={title === 'light' ? '#0d0d0d' : '#fff'}
          />
        </BackButton>
        <Title>Tenho um Código</Title>
      </Head>
      <Container1>
        <Border>
          <Body>
            <LottieView
              style={{
                width: 80,
                height: 80,
              }}
              source={require('../../assets/promotion.json')}
              autoPlay
              loop
            />

            <TextRed>Resgate seu KUPON Promocional!!!</TextRed>
            <TextName>Informe seu código a baixo.</TextName>
          </Body>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              name="promotion_id"
              icon="gift"
              placeholder="Digite ou cole seu código aqui"
              selectTextOnFocus
            />
            <Button
              onPress={() => {
                formRef.current?.submitForm()
              }}
            >
              Resgatar
            </Button>
          </Form>
        </Border>
      </Container1>
    </Container>
  )
}

export default PromotionCode
