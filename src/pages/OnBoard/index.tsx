import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

import {
  Slide,
  Title,
  TextSlide,
  ContainerButton,
  Button,
  ButtonLogin,
} from './styles'

import imgOnboard1 from '../../assets/imgOnboard1/imgOnboard1.png'
import imgOnboard2 from '../../assets/imgOnboard2/imgOnboard2.png'
import imgOnboard3 from '../../assets/imgOnboard3/imgOnboard3.png'
import { useAuth } from '../../hooks/auth'

const OnBoard: React.FC = () => {
  const { signInAsGuest } = useAuth()
  const navigation = useNavigation()

  return (
    <Swiper
      style={styles.wrapper}
      dotColor="#C25A5A"
      activeDotColor="#990000"
      showsButtons
      loop={false}
      nextButton={<Icon name="caretright" size={24} color="#990000" />}
      prevButton={<Icon name="caretleft" size={24} color="#990000" />}
    >
      <Slide testID="Screen1">
        <Image source={imgOnboard1} />
        <Title>Navegue pelo mapa, se localize & procure!</Title>
        <TextSlide>
          Cace os milhares de cupons de descontos espalhados pela cidade,
          localize-os no mapa.
        </TextSlide>
      </Slide>
      <Slide testID="Screen2">
        <Image source={imgOnboard2} />
        <Title>Capture, capture, capture Encha a mochila de cupons</Title>
        <TextSlide>
          Encontrou? Agora é só mirar e capturar para usar seu cupom de desconto
          na loja.
        </TextSlide>
      </Slide>
      <Slide testID="Screen3">
        <Image source={imgOnboard3} />
        <Title>Use seus cupons capturados nas lojas parceiras</Title>
        <TextSlide>
          Mostre o cupom capturado na hora de efetuar o pagamento e economize na
          sua compra.
        </TextSlide>
        <ContainerButton>
          <Button onPress={() => signInAsGuest()}>Entrar como visitante</Button>
        </ContainerButton>
        <ContainerButton>
          <Button onPress={() => navigation.navigate('SignUp')}>
            Criar uma nova conta
          </Button>
          <ButtonLogin onPress={() => navigation.navigate('SignIn')}>
            Faça seu Login
          </ButtonLogin>
        </ContainerButton>
      </Slide>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})

export default OnBoard
