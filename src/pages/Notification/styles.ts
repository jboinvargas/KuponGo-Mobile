import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 20px 25px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 10}px;
`

export const Button = styled(RectButton)`
  background-color: transparent;
  border-radius: 20px;
`

export const Title = styled.Text`
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  width: 100%;
  margin-left: 12px;
`

export const Items = styled.View`
  width: 100%;
  margin-top: 15px;
`

export const Notifications = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ImagePromotion = styled.Image`
  width: 50px;
  height: 50px;
`

export const TextNotification = styled.Text`
  flex: 1;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  font-size: 13px;
  line-height: 16px;
  padding: 0 14px;
`

export const TextRed = styled.Text`
  color: #cf1717;
  font-family: 'Raleway-Regular';
  font-size: 14px;
  line-height: 20px;
`
