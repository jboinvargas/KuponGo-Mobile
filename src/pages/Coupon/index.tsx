import React, { useState, useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import CaptureImage from '../../assets/imgsCouponPage/cinema1.json'
import explosion from '../../assets/explosion.json'
import Background from './Background'

import {
  CameraButton,
  CameraButtonWrapper,
  CouponContainer,
  CouponImage,
  ExplosionImage,
} from './styles'

const Coupon = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [showExplosion, setShowExplosion] = useState(false)
  const { navigate } = useNavigation()

  const kuponAnimation = useRef()
  const explosionAnimation = useRef()
  const playAnimation = () => {
    kuponAnimation.current.play(0, 59)
  }
  const scaleAnimation = () => {
    kuponAnimation.current.play(61, 75)
  }
  const playExplosion = () => {
    explosionAnimation.current.play(0, 60)
  }
  const pressAnimation = () => {
    kuponAnimation.current.play(16, 60)
  }

  const handleAnimateCoupon = () => {
    scaleAnimation()
    setTimeout(() => {
      setShowExplosion(true)
      playExplosion()
    }, 250)
    setTimeout(() => {
      setShowExplosion(false)
      navigate('MyKupons')
    }, 2500)
  }

  function handleToggleBackground() {
    setIsCameraOpen(!isCameraOpen)
  }

  return (
    <Background isCameraOpen={isCameraOpen}>
      <CameraButtonWrapper>
        <CameraButton onPress={handleToggleBackground}>
          <Icon name="photo-camera" size={29} color="#fff" />
        </CameraButton>
      </CameraButtonWrapper>

      <CouponContainer
        onPress={() => handleAnimateCoupon()}
        // onPressIn={() => pressAnimation()}
        // onPressIn={() => playAnimation()}
      >
        <CouponImage
          showExplosion={showExplosion}
          source={CaptureImage}
          resizeMode="contain"
          loop={false}
          autoPlay={false}
          progress={0}
          style={{ width: 200, height: 200 }}
          ref={kuponAnimation}
          renderMode="SOFTWARE"
          onLayout={() => playAnimation()}
          onAnimationFinish={() => playAnimation()}
        />
        <ExplosionImage
          showExplosion={showExplosion}
          source={explosion}
          resizeMode="contain"
          loop={false}
          autoPlay={false}
          progress={0}
          style={{ width: 600, height: 600 }}
          ref={explosionAnimation}
          renderMode="SOFTWARE"
        />
      </CouponContainer>
    </Background>
  )
}

export default Coupon
