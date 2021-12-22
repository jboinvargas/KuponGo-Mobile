import styled from 'styled-components/native'
import MapView from 'react-native-maps'

export const MapContainer = styled(MapView)`
  flex: 1;
`

export const StyledImage = styled.Image`
  flex: 1;
  max-width: 70px;
  max-height: 70px;
`

export const MapMarkerContainer = styled.View`
  width: 95px;
  height: 55px;
  flex-direction: column;
  border-width: 4px;
  border-color: #ccc;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  z-index: 2;
`

export const MapMarkerImage = styled.Image`
  width: 95px;
  height: 55px;
  flex: 1;
`

export const Anchor = styled.View`
  background-color: #ccc;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  position: relative;
  bottom: 8px;
  left: 40px;
`

export const StoreContainer = styled.View`
  width: 200px;
  height: 80px;
  border-radius: 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 12px;
`

export const BaseText = styled.Text`
  font-size: 11px;
  font-family: 'Raleway-Regulars';
  color: #666;
`
