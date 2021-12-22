import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'
import {
  Container,
  Head,
  Button,
  Title,
  Items,
  Notifications,
  TextNotification,
  ImagePromotion,
  TextRed,
} from './styles'

const Notification: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const navigation = useNavigation()
  return (
    <Container>
      <Head>
        <Button onPress={() => navigation.navigate('Dashboard')}>
          <Icon
            name="chevron-left"
            size={24}
            color={title === 'light' ? '#999' : '#fff'}
          />
        </Button>
        <Title>Notificações</Title>
      </Head>
      <Items>
        <Notifications>
          <ImagePromotion
            source={{
              uri:
                'https://corporate.mcdonalds.com/is/image//content/dam/gwscorp/nfl/newsroom/media_assets/The%20Token.png?$MEDIA_LISTING_MODAL_IMAGE$',
            }}
          />
          <TextNotification>
            Você capturou um cupom de 10% de desconto no Mc Donald’s
          </TextNotification>
          <TextRed>Ver Mais</TextRed>
        </Notifications>
        <Notifications>
          <ImagePromotion
            source={{
              uri:
                'https://corporate.mcdonalds.com/is/image//content/dam/gwscorp/nfl/newsroom/media_assets/The%20Token.png?$MEDIA_LISTING_MODAL_IMAGE$',
            }}
          />
          <TextNotification>
            Você capturou um cupom de 10% de desconto no Mc Donald’s
          </TextNotification>
          <TextRed>Ver Mais</TextRed>
        </Notifications>
        <Notifications>
          <ImagePromotion
            source={{
              uri:
                'https://corporate.mcdonalds.com/is/image//content/dam/gwscorp/nfl/newsroom/media_assets/The%20Token.png?$MEDIA_LISTING_MODAL_IMAGE$',
            }}
          />
          <TextNotification>
            Você capturou um cupom de 10% de desconto no Mc Donald’s
          </TextNotification>
          <TextRed>Ver Mais</TextRed>
        </Notifications>
        <Notifications>
          <ImagePromotion
            source={{
              uri:
                'https://corporate.mcdonalds.com/is/image//content/dam/gwscorp/nfl/newsroom/media_assets/The%20Token.png?$MEDIA_LISTING_MODAL_IMAGE$',
            }}
          />
          <TextNotification>
            Você capturou um cupom de 10% de desconto no Mc Donald’s
          </TextNotification>
          <TextRed>Ver Mais</TextRed>
        </Notifications>
      </Items>
    </Container>
  )
}

export default Notification
