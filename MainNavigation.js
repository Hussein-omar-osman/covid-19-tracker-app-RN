import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarStyle: { backgroundColor: '#3E4F7A' },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name='home'
                size={30}
                color={focused ? 'white' : '#BEBEBE'}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name='Emergency'
          component={Emergency}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name='ambulance'
                size={30}
                color={focused ? 'white' : '#BEBEBE'}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
