import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`
export const Container1 = styled.SafeAreaView`
  flex: 1;
  background-color: #960000;
  padding: 20px;
`
export const Border = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  border-radius: 15px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 30}px;
  padding-left: 20px;
`

export const Body = styled.View`
  align-items: center;
  padding: 10px;
`

export const BackButton = styled(RectButton)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
  padding: 6px;
`

export const Title = styled.Text`
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const TextRed = styled.Text`
  color: #cf1717;
  font-family: 'Raleway-Medium';
  font-size: 20px;
  padding-bottom: 15px;
  text-align: center;
`

export const ImagePromotion = styled.Image`
  height: 150px;
`

export const TextName = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  align-self: center;
`
