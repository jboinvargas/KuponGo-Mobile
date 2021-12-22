import React, { useState, useEffect, useCallback, useRef } from 'react'
import { View, Alert } from 'react-native'
import * as Location from 'expo-location'
// import { Constants, Permissions } from 'react-native-unimodules'
import MapView, {
  Marker,
  Callout,
  Region,
  MarkerAnimated,
  AnimatedRegion,
} from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

import LottieView from 'lottie-react-native'
import api from '../../services/api'

import mcLogo from '../../assets/mcdonalds.png'
// import userMarker from '../../assets/user-marker.png'
// import LottieUserMarker from '../../assets/walking.json'
import LottieUserMarker from '../../assets/avatarUsuario.json'
import logo from '../../assets/logo/LogoKuponGO.png'
import { customStyleAlt } from './mapCustomStyles'

import {
  MapContainer,
  StyledImage,
  MapMarkerContainer,
  MapMarkerImage,
  Anchor,
  StoreContainer,
  BaseText,
} from './styles'

interface Store {
  id: string
  name: string
  latitude: number
  longitude: number
  avatar_url: string
}

const LATITUDE_DELTA = 0.0001
const LONGITUDE_DELTA = 0.0001

const initialRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

const LOCATION_SETTINGS = {
  accuracy: Location.Accuracy.High,
  timeInterval: 200,
  distanceInterval: 0,
}

const Map = () => {
  const [region, setRegion] = useState<Region>(initialRegion)
  /*   const [animatedCoordinate, setAnimatedCoordinate] = useState<AnimatedRegion>(
    new AnimatedRegion(initialRegion),
  ) */
  const [stores, setStores] = useState<Store[]>([])
  const { navigate } = useNavigation()
  const mapRef = useRef<MapView>(null)
  const markerRef = useRef<Marker>(null)
  // função atualiza a movimentação do avatar
  const animateToRegion = useCallback(({ coords }: Location.LocationObject) => {
    if (mapRef) {
      mapRef?.current?.animateToCoordinate(
        { latitude: coords.latitude, longitude: coords.longitude },
        1,
      )
    }

    if (markerRef) {
      markerRef.current?.animateMarkerToCoordinate(
        { latitude: coords.latitude, longitude: coords.longitude },
        1,
      )
    }
  }, [])

  const getCurrentPosition = useCallback(async () => {
    // carrega a pagina e pega a posição inicial
    const { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso a localização negada.')
    }

    Location.watchPositionAsync(
      LOCATION_SETTINGS,
      (location: Location.LocationObject) => {
        setTimeout(() => animateToRegion(location), 2000)
      },
    )

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    })

    const {
      coords: { latitude, longitude },
    } = location

    setRegion({
      latitude,
      longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    })

    setTimeout(() => animateToRegion(location), 500)
  }, [animateToRegion, region])

  useEffect(() => {
    getCurrentPosition()
  }, []) //eslint-disable-line

  useEffect(() => {
    api.get<Store[]>('stores').then(response => {
      setStores(response.data)
    })
  }, [])

  const navigateToStore = useCallback(
    (store: Store) => {
      navigate('Store', { store })
    },
    [navigate],
  )

  return (
    <MapContainer
      customMapStyle={customStyleAlt}
      // loadingEnabled={region.latitude === 0}
      showsCompass
      initialRegion={region}
      region={region}
      showsBuildings={false}
      showsPointsOfInterest={false}
      pitchEnabled={false}
      scrollEnabled={false}
      rotateEnabled
      minZoomLevel={18}
      maxZoomLevel={21}
      followsUserLocation
      onRegionChangeComplete={newRegion => {
        setRegion({
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: newRegion.latitudeDelta,
          longitudeDelta: newRegion.longitudeDelta,
        })

        if (mapRef) {
          mapRef.current?.animateToViewingAngle(67.5, 1)
        }
      }}
    >
      {stores.map(store => (
        <Marker
          key={store.id}
          calloutAnchor={{
            x: 0.5,
            y: -0.3,
          }}
          coordinate={{
            latitude: Number(store.latitude),
            longitude: Number(store.longitude),
          }}
        >
          <View style={{ flex: 1, position: 'relative' }}>
            <MapMarkerContainer>
              <MapMarkerImage
                resizeMode="cover"
                source={store.avatar_url ? { uri: store.avatar_url } : mcLogo}
              />
            </MapMarkerContainer>
            <Anchor />

            <Callout tooltip onPress={() => navigateToStore(store)}>
              <StoreContainer>
                <BaseText
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontFamily: 'Raleway-Bold',
                  }}
                >
                  {store.name}
                </BaseText>
                <BaseText style={{ lineHeight: 13 }}>Restaurante 4.5*</BaseText>

                <BaseText
                  style={{ color: '#db7070', lineHeight: 20, marginTop: 2 }}
                >
                  Clique para abrir página da loja
                </BaseText>
              </StoreContainer>
            </Callout>
          </View>
        </Marker>
      ))}
      <MarkerAnimated
        ref={markerRef}
        coordinate={{
          latitude: Number(region.latitude),
          longitude: Number(region.longitude),
        }}
      >
        <LottieView
          style={{
            flex: 1,
            width: 70,
            height: 70,
            zIndex: 999,
          }}
          resizeMode="contain"
          source={LottieUserMarker}
          autoPlay
          renderMode="SOFTWARE"
          loop
        />
      </MarkerAnimated>
    </MapContainer>
  )
}

export default Map
