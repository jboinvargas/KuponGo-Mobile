import React, { useCallback, useEffect } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

import { Alert, BackHandler } from 'react-native'
import Map from '../../components/Map'

import { Container, Button } from './styles'

export interface Provider {
  id: string
  name: string
  avatar_url: string
}

const Dashboard = ({ navigation }: DrawerContentComponentProps) => {
  const backAction = useCallback(() => {
    Alert.alert('Atenção!', 'Sair do App?', [
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'Sim', onPress: () => BackHandler.exitApp() },
    ])

    return true
  }, [])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [backAction])

  return (
    <Container>
      <Map />

      <Button onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" color="#DD3C3C" size={28} />
      </Button>
    </Container>
  )
}

export default Dashboard
