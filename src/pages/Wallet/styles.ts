import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
`

export const Head = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 25}px;
  padding-bottom: 15px;
`

export const Button = styled(RectButton)`
  background-color: transparent;
  padding: 6px;
`

export const Title = styled.Text`
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  width: 100%;
`

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`

export const ImageStar = styled.Image`
  position: absolute;
  width: 32px;
  height: 32px;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  top: 0;
  right: 46.8%;
`

export const ViewEconomy = styled.View`
  flex: 1;
  width: 50%;
  height: 110px;
  background-color: #000;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 30px;
  justify-content: space-evenly;
  align-items: center;
`

export const TextEconomy = styled.Text`
  color: #fff;
  font-family: 'Raleway-Regular';
  font-size: 14px;
  line-height: 16px;
`

export const TextEconomyValue = styled.Text`
  color: #fff;
  font-family: 'Raleway-Medium';
  font-size: 22px;
  line-height: 24px;
`

export const ViewPoints = styled.View`
  flex: 1;
  width: 50%;
  height: 110px;
  background-color: #000;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 30px;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 1px;
`

export const TextPoint = styled(TextEconomy)``

export const TextPointValue = styled(TextEconomyValue)``

export const TextTransaction = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Medium';
  font-size: 16px;
  margin: 20px 0 15px 10px;
`

export const Items = styled.View`
  width: 100%;
`

export const CenteredView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`

export const ModalView = styled.View`
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-items: center;
  elevation: 5;
  width: 100%;
  height: 70%;
  position: relative;
  padding: 0 20px;
`

export const ImagePromotion = styled.Image`
  width: 135px;
  height: 135px;
  border-color: #fff;
  border-width: 15px;
  border-radius: 65px;
  position: absolute;
  top: -30px;
  background-color: white;

  right: ${Dimensions.get('window').width / 2 - 67}px;
`

export const ModalContent = styled.View`
  margin-top: 90px;
  width: 100%;
  height: 100%;
`

export const CloseButton = styled.TouchableOpacity`
  background-color: transparent;
  position: absolute;
  top: 15px;
  right: 15px;
`

export const ModalTitle = styled.Text`
  margin: 16px 0 24px;
  text-align: center;
  font-family: 'Raleway-Medium';
  font-size: 22px;
  line-height: 24px;
`
export const ModalSubtitle = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 15px;
`

export const DetailsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #ccc;
`

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100px;
`
export const RowText = styled.Text`
  font-family: 'Raleway-Regular';
  font-size: 13px;
  line-height: 15px;
  color: #333;
`

export const Right = styled.View``

export const HelpButton = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #b30909;
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  elevation: 5;
  padding: 0 15px;
  position: relative;
`

export const ButtonText = styled.Text`
  font-family: 'Raleway-Regular';
  color: #fff;
  font-size: 16px;
`

export const HelpIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #fff;
  color: #b30909;
  border-radius: 13px;
`
