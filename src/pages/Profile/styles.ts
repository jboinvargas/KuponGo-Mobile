import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  justify-content: center;
  /* padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px; */
  position: relative;
  justify-content: space-between;
  padding: 0 30px 40px;
`
export const Container1 = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 25}px;
`

export const ButtonBack = styled(RectButton)`
  background-color: transparent;
  border-radius: 20px;
  padding: 5px;
`

export const Title = styled.Text`
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  width: 100%;
  margin-left: 5px;
`

export const UserAvatarButton = styled.TouchableOpacity``

export const UserAvatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  align-self: center;
`

export const TextName = styled.Text`
  font-style: normal;
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  align-self: center;
`
