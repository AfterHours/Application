/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from './LandingScreen/LandingScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import ForYouScreen from './ForYouScreen/ForYouScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForYou" component={ForYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
