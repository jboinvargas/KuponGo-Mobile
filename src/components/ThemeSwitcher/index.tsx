import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Icon from 'react-native-vector-icons/Feather'

import { Container, Button } from './styles'

interface Props {
  toggleTheme(): void
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Button onPress={toggleTheme}>
        <Icon
          name={title === 'light' ? 'sun' : 'moon'}
          size={20}
          color="#FF2525"
        />
      </Button>
    </Container>
  )
}

export default ThemeSwitcher
