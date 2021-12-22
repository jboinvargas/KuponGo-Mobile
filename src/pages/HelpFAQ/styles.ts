import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 10}px;
`

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px;
`
export const ViewQuestion = styled.View`
  width: 333px;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  background-color: #db7070;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
`

export const Button = styled(RectButton)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
  padding: 6px;
`

export const Title = styled.Text`
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const Category = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
  align-self: center;
`
export const Question = styled.Text`
  font-family: 'Raleway-Regular';
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`
export const Answer = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 15px;
`
