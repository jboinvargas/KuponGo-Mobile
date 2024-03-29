import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default Button
