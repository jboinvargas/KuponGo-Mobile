import React, { useState, useEffect, useCallback, useRef } from 'react'
import { View, Alert } from 'react-native'
import * as Location from 'expo-location'
// import { Constants, Permissions } from 'react-native-unimodules'
import MapView, {
  Marker,
  Callout,
  Region,
  Camera,
  MarkerAnimated,
  ProviderPropType,
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

const LATITUDE_DELTA = 0.0001 // -20.4849967 //
const LONGITUDE_DELTA = 0.0001 // -54.6519517 //

const initialRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

const initialCamera = {
  center: { latitude: LATITUDE_DELTA, longitude: LONGITUDE_DELTA },
  heading: 0,
  pitch: 67.5,
  zoom: 20,
  altitude: 1000,
}

const LOCATION_SETTINGS = {
  accuracy: Location.Accuracy.High,
  timeInterval: 200,
  distanceInterval: 0,
}

const Map = () => {
  const [region, setRegion] = useState<Region>(initialRegion)
  const [camera, setarCamera] = useState<Camera>(initialCamera)
  const avatarAnimation = useRef()
  /*   const [animatedCoordinate, setAnimatedCoordinate] = useState<AnimatedRegion>(
    new AnimatedRegion(initialRegion),
  ) */
  const idleAnimation = () => {
    avatarAnimation.current.play(64, 125)
  }
  const walkAnimationLeft = () => {
    avatarAnimation.current.play(32, 63)
  }
  const walkAnimationRight = () => {
    avatarAnimation.current.play(0, 31)
  }

  const [stores, setStores] = useState<Store[]>([])
  const { navigate } = useNavigation()
  const mapRef = useRef<MapView>(null)
  const markerRef = useRef<Marker>(null)

  // função para atualizar a posição
  const animateToRegion = useCallback(({ coords }: Location.LocationObject) => {
    if (mapRef) {
      mapRef?.current?.animateCamera({
        center: { latitude: coords.latitude, longitude: coords.longitude },
      })
    }

    if (markerRef) {
      markerRef.current?.animateMarkerToCoordinate({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    }
    // walkAnimationRight()
  }, [])

  // Função para pegar a posição inicial
  const getCurrentPosition = useCallback(async () => {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso a localização negada.')
    }

    Location.watchPositionAsync(
      LOCATION_SETTINGS,
      (location: Location.LocationObject) => {
        setTimeout(() => animateToRegion(location), 2000)
        // console.log(
        //   `gps: ${location.coords.latitude}, ${location.coords.longitude}`,
        // )
        // console.log(
        //   `camera: ${camera.center.latitude}, ${camera.center.longitude}`,
        // )
      },
    )
    setarCamera({
      center: {
        latitude: camera.center.latitude,
        longitude: camera.center.longitude,
      },
      heading: 0,
      pitch: 67.5,
      zoom: 20,
      altitude: 1000,
    })
  }, [animateToRegion, camera])

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
  // console.log(camera)
  // console.log(region)
  return (
    <MapContainer
      customMapStyle={customStyleAlt}
      showsCompass={false}
      showsBuildings={false}
      showsPointsOfInterest={false}
      pitchEnabled={false}
      scrollEnabled={false}
      rotateEnabled
      minZoomLevel={20}
      maxZoomLevel={21}
      followsUserLocation
      ref={mapRef}
      initialCamera={camera}
      camera={camera}
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
          loop={false}
          autoPlay={false}
          progress={0}
          ref={avatarAnimation}
          renderMode="SOFTWARE"
          onLayout={() => idleAnimation()}
          onAnimationFinish={() => idleAnimation()}
        />
      </MarkerAnimated>
    </MapContainer>
  )
}

export default Map
