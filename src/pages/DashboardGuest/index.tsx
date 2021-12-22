import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

import Map from './MapGuest'

import { Container, Button } from './styles'

export interface Provider {
  id: string
  name: string
  avatar_url: string
}

const DashboardGuest = ({ navigation }: DrawerContentComponentProps) => (
  <Container>
    <Map />
    <Button onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" color="#DD3C3C" size={28} />
    </Button>
  </Container>
)

export default DashboardGuest
