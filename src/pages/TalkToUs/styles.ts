import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 10}px;
`

export const Body = styled.View`
  align-items: center;
  padding: 10px;
`

export const Itens = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Kupon = styled.View`
  flex: 1;
  min-width: 150px;
  min-height: 250px;
  background-color: #ffffff;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  elevation: 5;
`

export const BackButton = styled(RectButton)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
  padding: 6px;
`

export const Title = styled.Text`
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const TextBody = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 15px;
`

export const TextCountBag = styled.Text`
  color: #cf1717;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 15px;
`

export const TextPerc = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  padding-top: 15px;
`

export const ImagePromotion = styled.Image`
  height: 150px;
`

export const TextPromotion = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-top: 15px;
`
export const TextExpire = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding-top: 15px;
`
export const TextAvailable = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`
export const TextRed = styled.Text`
  color: #cf1717;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`

export const TextName = styled.Text`
  font-style: normal;
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway';
  align-self: center;
`
