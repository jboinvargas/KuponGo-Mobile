import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'

export const MapContainer = styled(MapView)`
  flex: 1;
`

export const StyledImage = styled.Image`
  flex: 1;
  max-width: 70px;
  max-height: 70px;
`

export const LogoStore = styled.Image`
  flex: 1;
  width: 68px;
  height: 52px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`

export const CalloutImageContainer = styled.View`
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
`

export const StoreContainer = styled.View`
  width: ${Dimensions.get('window').width - 120}px;
  height: 98px;
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 8px;
`

export const BaseText = styled.Text`
  font-size: 12px;
  color: #666;
`
