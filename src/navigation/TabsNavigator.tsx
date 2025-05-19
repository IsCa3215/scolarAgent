import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '../screens/MainScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { AntDesign } from '@expo/vector-icons';
import EventScreen from '../screens/EventScreen';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Inicio" component={MainScreen} options={
        {
          tabBarIcon: ({ color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }
      }/>
      <Tab.Screen name="Calendario" component={CalendarScreen} />
      <Tab.Screen name="Eventos" component={EventScreen} options={
        {
          tabBarIcon: ({ color, size}) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }
      }/>
    </Tab.Navigator>
  );
};

export default TabsNavigator;
