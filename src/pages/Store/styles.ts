import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Promotion } from './index'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`

export const StoreView = styled.View`
  /* flex: 1; */
  margin-bottom: 32px;
`
export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 32}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 24px;
  line-height: 28px;
  display: flex;
  color: ${props => props.theme.colors.text};
  align-self: center;
  text-align: center;
`

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  align-self: center;
  border-radius: 45px;
`

export const StoreInformation = styled.View`
  margin-top: 34px;
  margin-left: 22px;
`

export const StoreInformationView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const Address = styled.Text`
  font-size: 13px;
  line-height: 15px;
  font-family: 'Raleway-Regular';
  color: #666;
`

export const OpeningHours = styled.Text`
  font-size: 13px;
  line-height: 15px;
  font-family: 'Raleway-Regular';
  color: #666;
  margin-top: 10px;
`

export const PromotionsView = styled.View`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`

export const PromotionsTitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 27px;
  font-family: 'Raleway-Medium';
`

export const PromotionsList = styled(FlatList as new () => FlatList<Promotion>)`
  flex: 1;
`

export const Kupon = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.kuponButton};
  border-radius: 25px;
  flex-direction: row;
  margin-vertical: 5px;
  elevation: 1;
`

export const KuponImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-vertical: 10px;
  margin-left: 12px;
`
export const KuponTextContainer = styled.View`
  flex-direction: column;
  width: 80%;
  flex: 1;
`

export const KuponTitle = styled.Text`
  font-size: 18px;
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.kuponText};
  margin-left: 10px;
  margin-top: 5px;
  font-family: 'Raleway-Regular';
`

export const KuponValidationTime = styled.Text`
  font-size: 12px;

  display: flex;
  align-items: center;

  margin-left: 10px;

  color: ${props => props.theme.colors.kuponText};
  font-family: 'Raleway-Regular';
`
export const KuponTime = styled.Text`
  font-size: 12px;
  display: flex;
  align-items: center;

  margin-left: 10px;

  color: #c23a3a;
  font-family: 'Raleway-Regular';
`

export const NumberOfKuponsAvailable = styled.Text`
  margin-left: 10px;
  line-height: 12px;
  text-align: right;
  font-size: 11px;
  color: ${props => props.theme.colors.kuponText};
  font-family: 'Raleway-Regular';
`

export const CatchView = styled.View`
  align-self: flex-end;
  height: 100%;
  width: 48px;

  background: #cf1717;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  justify-content: center;
  margin-left: 13px;
`

export const CatchViewText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #fff;
  font-family: 'Raleway-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`

export const ModalCenteredView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway-Regular';
`

export const ModalView = styled.View`
  margin: 20px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};

  padding: 35px;
  align-items: center;
  /* shadow-color: #000;
  shadow-off-set: {
    width: 0;
    height: 2px;
  } */
  /* shadow-opacity: 0.25;
  shadow-radius: 3.84px; */
  elevation: 3;
`

export const ModalLogo = styled.Image`
  width: 150px;
  height: 150px;
  align-self: center;
  border-radius: 75px;
  margin-top: 25px;
`

export const ModalTitle = styled.Text`
  font-family: 'Raleway-Bold';
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 52px;
  color: ${props => props.theme.colors.text};
`

export const ModalDescription = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.text};
`

export const ModalInfoContainer = styled.View`
  flex: 1;
  margin-horizontal: 50px;
  width: 100%;
  margin-top: 33px;
`

export const ModalStoreName = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 24px;
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.text};
`

export const ModalPromotionExpires = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
`

export const ModalProductDescription = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;
  margin-top: 36px;

  color: ${props => props.theme.colors.text};
`

export const ModalInfoKupon = styled.Text`
  font-family: 'Raleway-Regular';
  font-size: 12px;
  line-height: 14px;
  margin-top: 25px;

  color: ${props => props.theme.colors.text};
`

export const ModalCatchKupon = styled.TouchableOpacity`
  background: #cf1717;
  box-shadow: 0px 4px 10px rgba(207, 23, 23, 0.5);
  border-radius: 25px;
  width: 335px;
  height: 55px;
  elevation: 2;
  align-items: center;
  justify-content: center;
`

export const ModalCatchKuponText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 14px;
  line-height: 16px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #fff;
`
