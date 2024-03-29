import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  background: ${props => props.theme.colors.li};
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.liColor};
  border-radius: 15px;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #3a3836;
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.colors.inputColor};
  font-size: 16px;
  font-family: 'Raleway-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
