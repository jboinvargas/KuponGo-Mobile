import React from 'react'
import { View, ActivityIndicator, Image } from 'react-native'

import AuthRoutes from './auth.routes'
import AppRoutes from './AppRoutes/app.routes'
import GuestRoutes from './GuestRoutes/guest.routes'

import { useAuth } from '../hooks/auth'
import logo from '../assets/logoL/LogoKuponGOLight.png'

const Routes: React.FC = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#960000',
        }}
      >
        <Image source={logo} />
        <ActivityIndicator size="small" color="#fff" />
      </View>
    )
  }

  if (!user) return <AuthRoutes />

  return user?.name === 'Guest' ? <GuestRoutes /> : <AppRoutes />
}

export default Routes
