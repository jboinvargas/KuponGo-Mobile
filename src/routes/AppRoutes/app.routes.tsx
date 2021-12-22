import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Dashboard from '../../pages/Dashboard'
import Profile from '../../pages/Profile'
import Store from '../../pages/Store'
import MyKupons from '../../pages/MyKupons'
import Coupon from '../../pages/Coupon'
import Notification from '../../pages/Notification'
import Wallet from '../../pages/Wallet'
import HelpFAQ from '../../pages/HelpFAQ'
import TalkToUs from '../../pages/TalkToUs'
import PromotionCode from '../../pages/PromotionCode'
import { DrawerContent } from './drawerContent'

const Drawer = createDrawerNavigator()

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    openByDefault={false}
    screenOptions={{ headerShown: false }}
    drawerContent={props => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Store" component={Store} />
    <Drawer.Screen name="MyKupons" component={MyKupons} />
    <Drawer.Screen name="Coupon" component={Coupon} />
    <Drawer.Screen name="Notification" component={Notification} />
    <Drawer.Screen name="Wallet" component={Wallet} />
    <Drawer.Screen name="HelpFAQ" component={HelpFAQ} />
    <Drawer.Screen name="TalkToUs" component={TalkToUs} />
    <Drawer.Screen name="PromotionCode" component={PromotionCode} />
  </Drawer.Navigator>
)

export default AppRoutes
