import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated from 'react-native-reanimated'

import { ThemeContext } from 'styled-components'
import { useAuth } from '../../hooks/auth'

type Props = DrawerContentComponentProps<DrawerContentOptions>

export function DrawerContent(props: Props) {
  const { colors } = useContext(ThemeContext)
  const translateX = Animated.interpolateNode(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  })

  const { user, signOut } = useAuth()

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: `${colors.background}`,
      }}
      {...props}
    >
      <Animated.View
        style={[
          styles.drawerContent,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <View style={styles.userInfoSection}>
          <View style={styles.userInfo}>
            <View>
              <Text style={[styles.title, { color: `${colors.text}` }]}>
                {user.name}
              </Text>
              <Text style={[styles.caption, { color: `${colors.text}` }]}>
                {user.email}
              </Text>
            </View>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  user.avatar_url ||
                  'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
              }}
            />
          </View>
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            activeTintColor={colors.text}
            icon={({ size }) => (
              <Icon
                name="ticket-percent-outline"
                color={colors.text}
                size={size}
              />
            )}
            label="Meus Cupons"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('MyKupons')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="account-outline" color={colors.text} size={size} />
            )}
            label="Meu perfil"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('Profile')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Ionicons name="wallet-outline" color={colors.text} size={size} />
            )}
            label="Carteira"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('Wallet')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Ionicons
                name="ios-notifications-outline"
                color={colors.text}
                size={size}
              />
            )}
            label="Notificações"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('Notification')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="wallet-giftcard" color={colors.text} size={size} />
            )}
            label="Tenho um Código"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('PromotionCode')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="email-outline" color={colors.text} size={size} />
            )}
            label="Fale Conosco"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('TalkToUs')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Ionicons
                name="settings-outline"
                color={colors.text}
                size={size}
              />
            )}
            label="Configurações"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('Coupon')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon
                name="help-circle-outline"
                color={colors.text}
                size={size}
              />
            )}
            label="Ajuda & FAQs"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => props.navigation.navigate('HelpFAQ')}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="logout" color={colors.text} size={size} />
            )}
            label="Sair"
            labelStyle={[styles.label, { color: `${colors.text}` }]}
            onPress={() => signOut()}
          />
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'Raleway-Regular',
    opacity: 0.5,
  },
  avatar: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingVertical: 16,
    marginRight: 20,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerSection: {
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
  },
})
