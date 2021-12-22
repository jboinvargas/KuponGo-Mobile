import React, { useState, useEffect, useCallback, useRef } from 'react'
import { View, Alert, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'
import { Marker, Callout, Region } from 'react-native-maps'

import api from '../../../services/api'
import { useAuth } from '../../../hooks/auth'

import marker from '../../../assets/default-marker.png'
import userMarker from '../../../assets/user-marker.png'
import logo from '../../../assets/logo/LogoKuponGO.png'
import { customStyleAlt } from '../../../components/Map/mapCustomStyles'

import {
  MapContainer,
  StyledImage,
  CalloutImageContainer,
  StoreContainer,
  BaseText,
  LogoStore,
} from './styles'

interface Store {
  id: string
  name: string
  latitude: number
  longitude: number
  avatar_url: string
}

const initialRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.0001,
  longitudeDelta: 0.0001,
}

const Map = () => {
  const [region, setRegion] = useState<Region>(initialRegion)
  const [stores, setStores] = useState<Store[]>([])
  const { signOut } = useAuth()
  const mapRef = useRef(null)

  const getCurrentPosition = async () => {
    const { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso a localização negada.')
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync()

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0001,
      longitudeDelta: 0.0001,
    })
  }

  useEffect(() => {
    getCurrentPosition()
  }, [])

  useEffect(() => {
    api.get<Store[]>('stores').then(response => {
      setStores(response.data)
    })
  }, [])

  const navigateToSignUp = useCallback(() => {
    signOut()
  }, [signOut])

  return (
    <MapContainer
      showsCompass={false}
      initialRegion={region}
      region={region}
      showsBuildings={false}
      showsPointsOfInterest={false}
      scrollEnabled
      pitchEnabled
      rotateEnabled
      minZoomLevel={15}
      maxZoomLevel={21}
      customMapStyle={customStyleAlt}
      followsUserLocation
      onUserLocationChange={getCurrentPosition}
      ref={mapRef}
      onMapReady={() => {
        if (mapRef) {
          mapRef.current?.animateToViewingAngle(67.5, 5)
        }
      }}
    >
      <Marker
        coordinate={{
          latitude: Number(region.latitude),
          longitude: Number(region.longitude),
        }}
      >
        <StyledImage source={userMarker} resizeMode="contain" />
      </Marker>
      {stores.map(store => (
        <Marker
          key={store.id}
          calloutAnchor={{
            x: 0.6,
            y: -0.2,
          }}
          coordinate={{
            latitude: Number(store.latitude),
            longitude: Number(store.longitude),
          }}
        >
          <>
            <StyledImage source={marker} resizeMode="contain" />

            <Callout
              tooltip
              onPress={navigateToSignUp}
              style={{ flex: 1, minWidth: 200, maxWidth: 270 }}
            >
              <StoreContainer>
                <CalloutImageContainer>
                  <BaseText
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LogoStore
                      source={
                        store.avatar_url ? { uri: store.avatar_url } : logo
                      }
                      resizeMode="contain"
                    />
                  </BaseText>
                </CalloutImageContainer>
                <View style={{ marginLeft: 15 }}>
                  <BaseText
                    style={{ fontSize: 14, color: '#000', fontWeight: '500' }}
                  >
                    {store.name}
                  </BaseText>
                  <BaseText style={{ marginBottom: 15 }}>
                    Restaurante 4.5*
                  </BaseText>
                  <TouchableOpacity>
                    <BaseText style={{ color: '#db7070' }}>
                      Clique para abrir página da loja
                    </BaseText>
                  </TouchableOpacity>
                </View>
              </StoreContainer>
            </Callout>
          </>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
