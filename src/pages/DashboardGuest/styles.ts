import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  position: relative;
`

export const Button = styled(RectButton)`
  position: absolute;
  top: ${getStatusBarHeight() + 24}px;
  left: 15px;
  background-color: white;
  border-radius: 20px;
  padding: 6px;
`
