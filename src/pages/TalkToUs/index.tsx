import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'

import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'
import {
  Container,
  Head,
  Body,
  Itens,
  Kupon,
  Title,
  TextBody,
  TextCountBag,
  TextPerc,
  TextPromotion,
  TextExpire,
  TextAvailable,
  ImagePromotion,
  TextRed,
  TextName,
  BackButton,
} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const TalkToUs: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const navigation = useNavigation()
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
        <Title>Fale Conosco</Title>
      </Head>
      <Body>
        <TextBody>
          Preencha o formulário para nos contatar ou envie um e-mail para
        </TextBody>
        <TextCountBag>contato@kupongo.com.br</TextCountBag>
      </Body>
      <TextName>Preencha o Formulário a baixo.</TextName>
      <Form>
        <Input
          autoCapitalize="words"
          name="name"
          icon="user"
          placeholder="Nome"
          returnKeyType="next"
        />

        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          name="email"
          icon="mail"
          placeholder="E-mail"
          returnKeyType="next"
        />

        <Input
          autoCapitalize="words"
          name="subject"
          icon="help-circle"
          placeholder="Assunto"
          returnKeyType="next"
        />

        <Input
          autoCapitalize="words"
          name="message"
          icon="message-circle"
          placeholder="Pergunta ou comentário"
          returnKeyType="next"
        />
      </Form>
      <Button
        onPress={() => {
          navigation.goBack()
        }}
      >
        Enviar mensagem
      </Button>
    </Container>
  )
}

export default TalkToUs
