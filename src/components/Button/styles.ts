import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #b30909;
  border-radius: 15px;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
`

export const ButtonText = styled.Text`
  font-family: 'Raleway-Regular';
  color: #fff;
  font-size: 16px;
`
