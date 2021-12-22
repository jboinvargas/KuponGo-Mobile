import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated from 'react-native-reanimated'

import { useAuth } from '../../hooks/auth'

type Props = DrawerContentComponentProps<DrawerContentOptions>

export function DrawerContent(props: Props) {
  const translateX = Animated.interpolateNode(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  })

  const { user, signOut } = useAuth()

  return (
    <DrawerContentScrollView {...props}>
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
              <Text style={styles.title}>Visitante</Text>
              <Text style={styles.caption}>Você logou como visitante</Text>
            </View>
            <Image
              style={styles.avatar}
              source={{
                uri: user.avatar_url,
              }}
            />
          </View>
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="login" color={color} size={size} />
            )}
            label="Criar conta"
            onPress={() => signOut()}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="logout" color={color} size={size} />
            )}
            label="Sair"
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
    fontWeight: 'bold',
    fontSize: 20,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
