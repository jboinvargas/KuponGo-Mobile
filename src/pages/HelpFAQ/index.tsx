import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native'

import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'
import {
  Container,
  Head,
  Body,
  Title,
  Category,
  Question,
  Answer,
  Button,
  ViewQuestion,
} from './styles'

const HelpFAQ: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const navigation = useNavigation()
  return (
    <Container>
      <Head>
        <Button onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={24}
            color={title === 'light' ? '#0d0d0d' : '#fff'}
          />
        </Button>
        <Title>Ajuda e FAQ</Title>
      </Head>
      <Body>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <Category>Sobre o KUPON-GO</Category>

          <Collapse style={{ flex: 1, width: '100%' }}>
            <CollapseHeader>
              <ViewQuestion>
                <Icon name="chevron-down" size={24} color="#fff" />
                <Question>O que é o KUPON-GO?</Question>
              </ViewQuestion>
            </CollapseHeader>
            <CollapseBody>
              <Answer>
                Com a Sitly, você pode encontrar uma babá ou uma família com a
                qual trabalhar na sua região. Entre em contato facilmente,
                planeje uma entrevista e faça os arranjos necessários. Cabe a
                você decidir que tipo de babá ou família é melhor para a suas
                necessidades, assim você tomará as próprias decisões sobre as
                pessoas com quem entrar em contato.
              </Answer>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeader>
              <ViewQuestion>
                <Icon name="chevron-down" size={24} color="#fff" />
                <Question>O que é o KUPON-GO?</Question>
              </ViewQuestion>
            </CollapseHeader>
            <CollapseBody>
              <Answer>
                Com a Sitly, você pode encontrar uma babá ou uma família com a
                qual trabalhar na sua região. Entre em contato facilmente,
                planeje uma entrevista e faça os arranjos necessários. Cabe a
                você decidir que tipo de babá ou família é melhor para a suas
                necessidades, assim você tomará as próprias decisões sobre as
                pessoas com quem entrar em contato.
              </Answer>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeader>
              <ViewQuestion>
                <Icon name="chevron-down" size={24} color="#fff" />
                <Question>O que é o KUPON-GO?</Question>
              </ViewQuestion>
            </CollapseHeader>
            <CollapseBody>
              <Answer>
                Com a Sitly, você pode encontrar uma babá ou uma família com a
                qual trabalhar na sua região. Entre em contato facilmente,
                planeje uma entrevista e faça os arranjos necessários. Cabe a
                você decidir que tipo de babá ou família é melhor para a suas
                necessidades, assim você tomará as próprias decisões sobre as
                pessoas com quem entrar em contato.
              </Answer>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeader>
              <ViewQuestion>
                <Icon name="chevron-down" size={24} color="#fff" />
                <Question>O que é o KUPON-GO?</Question>
              </ViewQuestion>
            </CollapseHeader>
            <CollapseBody>
              <Answer>
                Com a Sitly, você pode encontrar uma babá ou uma família com a
                qual trabalhar na sua região. Entre em contato facilmente,
                planeje uma entrevista e faça os arranjos necessários. Cabe a
                você decidir que tipo de babá ou família é melhor para a suas
                necessidades, assim você tomará as próprias decisões sobre as
                pessoas com quem entrar em contato.
              </Answer>
            </CollapseBody>
          </Collapse>
        </ScrollView>
      </Body>
    </Container>
  )
}

export default HelpFAQ
