import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import LottieView from 'lottie-react-native'

type ITextProp = {
  isCameraOpen: boolean
  showExplosion: boolean
}

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  position: relative;
`
export const CouponTextContainer = styled.View`
  align-items: center;
  justify-content: center;
`
export const AnimatedText = styled(Animated.Text)<ITextProp>`
  font-size: 42px;
  font-weight: 800;
  color: ${props => (props.isCameraOpen ? '#fff' : '#232129')};
  text-align: center;
  font-family: 'Raleway-Bold';
  position: absolute;
  bottom: 0;
  right: 0;
`

export const CouponContainer = styled.TouchableOpacity`
  align-self: center;
`

export const CouponImage = styled(LottieView)<ITextProp>`
  width: 200px;
  height: 200px;
  position: relative;
  z-index: 10;
  display: ${props => (props.showExplosion ? 'none' : 'flex')};
`
export const ExplosionImage = styled(LottieView)<ITextProp>`
  width: 600px;
  height: 600px;
  position: relative;
  z-index: 10;
  display: ${props => (props.showExplosion ? 'flex' : 'none')};
`

export const BagImage = styled.Image`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: -55px;
  right: ${Dimensions.get('window').width / 2 - 150}px;
`

export const CameraButtonWrapper = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: #00000022;
  position: absolute;
  top: 50px;
  right: ${Dimensions.get('window').width / 2 - 30}px;
`

export const CameraButton = styled.TouchableOpacity``
