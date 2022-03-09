import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { darkScheme } from './components/styles/Colors';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Progress from './screens/Progress';
import Interview from './screens/Interview';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: darkScheme.SecondaryBackgound,
            borderTopColor: 'transparent',
          },
          tabBarActiveTintColor: darkScheme.Secondary,
          tabBarInactiveTintColor: darkScheme.Primary,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Interview"
          component={Interview}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={Progress}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="pie-chart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
