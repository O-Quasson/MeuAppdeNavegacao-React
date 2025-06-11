import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import FlintScreen from './screens/FlintScreen';
import BucketScreen from './screens/BucketScreen';
import NetherScreen from './screens/NetherScreen';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}/>
        <stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="Flint" component={FlintScreen} />
        <stack.Screen name="Bucket" component={BucketScreen} />
        <stack.Screen name="Nether" component={NetherScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}