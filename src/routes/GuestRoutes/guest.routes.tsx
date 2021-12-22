import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DashboardGuest from '../../pages/DashboardGuest'
import { DrawerContent } from './drawerContent'

const Drawer = createDrawerNavigator()

const AppRoutes = () => (
  <Drawer.Navigator
    openByDefault={false}
    screenOptions={{ headerShown: false }}
    drawerContent={props => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="DashboardGuest" component={DashboardGuest} />
  </Drawer.Navigator>
)

export default AppRoutes
