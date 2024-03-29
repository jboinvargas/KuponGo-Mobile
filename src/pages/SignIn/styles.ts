import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`

export const Title = styled.Text`
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Bold';
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  padding-bottom: 15px;
`

export const ForgotPassword = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 24px;
`

export const ForgotPasswordText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Raleway-Medium';
  text-align: right;
`
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CreateAccountButtonText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Raleway-Medium';
  margin-left: 16px;
`

export const CreateAccountButtonTextRed = styled.Text`
  color: #d3222a;
  font-size: 16px;
  font-family: 'Raleway-Medium';
  margin-left: 16px;
`
