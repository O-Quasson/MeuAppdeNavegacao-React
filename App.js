import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Homescreen} />
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}