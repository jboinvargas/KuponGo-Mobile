import 'react-native-gesture-handler'

import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { View, StatusBar, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import ThemeSwitcher from './components/ThemeSwitcher'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Routes from './routes'

import AppProvider from './hooks'

LogBox.ignoreLogs(['animateToViewingAngle', "The 'captureAudio' property set"])

const App: React.FC = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#0d0d0d"
          translucent
        />
        <AppProvider>
          <View
            style={{
              flex: 1,
              backgroundColor: '#0d0d0d',
            }}
          >
            <Routes />
            <ThemeSwitcher toggleTheme={toggleTheme} />
          </View>
        </AppProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
