import React, { PropsWithChildren } from 'react'
import { Dimensions } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { ImageBackground } from './styles'
import background from '../../../assets/imgsCouponPage/bgCinema.png'
// import background from '../../../assets/imgsCouponPage/background.png'

type IProps = {
  isCameraOpen: boolean
}

const Background = ({ children, isCameraOpen }: PropsWithChildren<IProps>) => {
  if (isCameraOpen) {
    return (
      <RNCamera
        style={{ flex: 1, justifyContent: 'center', position: 'relative' }}
      >
        {children}
      </RNCamera>
    )
  }

  return (
    <ImageBackground
      imageStyle={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 10,
        marginTop: 55,
        resizeMode: 'cover',
      }}
      source={background}
    >
      {children}
    </ImageBackground>
  )
}

export default Background
