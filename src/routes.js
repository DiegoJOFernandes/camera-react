import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Feather} from '@expo/vector-icons'

import Home from './pages/home';
import Login from './pages/login';
import Cam from './pages/cam';
import Ia from './pages/ia';


const Tab = createBottomTabNavigator()

export default function Routes() {
  return(
    <Tab.Navigator
     tabBarOptions={{
      style:{
        backgoundColor: '#121212',
        borderTopColor: 'transparent'
      },
      activeTintColor: '#121212',
      tabStyle:{
        paddingBottom: 5,
        paddingTop: 5,
      }
     }}
    >
      <Tab.Screen 
      name="Inicio" 
      component={Home} 
      options={{ 
        tabBarIcon: ({ size, color }) => (
          <Entypo name="home" size={size} color={color}/>
        )
      }}
      />
      <Tab.Screen name="Login" component={Login}
      options={{ 
        tabBarIcon: ({ size, color }) => (
          <Entypo name="Login" size={size} color={color}/>
        )
      }}
      />
      <Tab.Screen name="Cam" component={Cam}
      options={{ 
        tabBarIcon: ({ size, color }) => (
          <Entypo name="Camera" size={size} color={color}/>
        )
      }}   
      />
      <Tab.Screen name="IA" component={Ia}
      options={{ 
        tabBarIcon: ({ size, color }) => (
          <Entypo name="IA" size={size} color={color}/>
        )
      }}
      />
    </Tab.Navigator>
  )
}
