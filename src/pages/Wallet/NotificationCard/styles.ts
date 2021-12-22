import styled from 'styled-components/native'

type TextValueProps = {
  status: string
}

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 10px;
`

export const LeftContent = styled.View`
  flex-direction: row;
`

export const ImagePromotion = styled.Image`
  width: 50px;
  height: 50px;
  border-color: #bebebe;
  border-width: 1px;
  border-radius: 5px;
`

export const ViewNotification = styled.View`
  justify-content: center;
  margin-left: 12px;
`

export const TextStore = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Raleway-Medium';
  font-size: 18px;
  line-height: 21px;
`

export const TextStoreCategory = styled.Text`
  color: #909090;
  font-family: 'Raleway-Regular';
  font-size: 14px;
  line-height: 16px;
`

export const ViewActions = styled.View`
  justify-content: center;
  align-items: flex-end;
`

export const TextValue = styled.Text<TextValueProps>`
  color: ${props => (props.status === 'used' ? '#159600' : '#cf1717')};
  font-family: 'Raleway-Regular';
  font-size: 14px;
  line-height: 14px;
`

export const TextMessage = styled.Text`
  color: #909090;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  line-height: 14px;
`

export const TextPoints = styled.Text`
  color: #0019f7;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  line-height: 14px;
`
