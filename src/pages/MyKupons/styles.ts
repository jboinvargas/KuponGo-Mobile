import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  width: ${Dimensions.get('window').width}px;
  padding: 20px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-bottom: 28px;
`

export const Button = styled(RectButton)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
`

export const Title = styled.Text`
  font-size: 22px;
  line-height: 22px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  width: 100%;
  margin-left: 12px;
`

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 16px;
  width: 100%;
`

export const TextBody = styled.Text`
  color: ${props => props.theme.colors.text};
  flex: 1;
  font-family: 'Raleway-Medium';
  font-size: 13px;
  line-height: 14px;
  max-width: 295px;
`

export const TextCountBag = styled.Text`
  color: #cf1717;
  font-family: 'Raleway-Medium';
  font-size: 20px;
  line-height: 21px;
`

export const ItensContainer = styled.ScrollView``

export const Itens = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 25px;
`
