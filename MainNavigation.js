import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}></Tab.Screen>
        <Tab.Screen name='Emergency' component={Emergency}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
