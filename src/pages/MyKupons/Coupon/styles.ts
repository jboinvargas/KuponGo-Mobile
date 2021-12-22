import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
  width: ${Dimensions.get('window').width / 2 - 40}px;
  min-height: 250px;
  background-color: ${props => props.theme.colors.li};
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  elevation: 5;
`

export const ImagePromotion = styled.Image`
  height: 140px;
  width: ${Dimensions.get('window').width / 2 - 60}px;
  border-radius: 8px;
`

export const InfoKupon = styled.View`
  padding: 0 8px;
`

export const TextPerc = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Bold';
  font-size: 19px;
  line-height: 18px;
  padding-top: 8px;
`

export const TextPromotion = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  font-size: 14px;
  line-height: 14px;
  padding-top: 5px;
`
export const TextExpire = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  font-size: 12px;
  line-height: 17px;
  margin-top: 14px;
`
export const TextAvailable = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Regular';
  font-size: 11px;
  line-height: 17px;
`
export const TextRed = styled.Text`
  color: #cf1717;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  line-height: 17px;
`
