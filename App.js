/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import LandingScreen from './LandingScreen/LandingScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';

// Your secondary Firebase project credentials...
const credentials = {
  apiKey: 'AIzaSyBJpla0_J-bleeJFWn6lUidRUAbS-S8WP0',
  authDomain: 'afterhoursreactnative.firebaseapp.com',
  projectId: 'afterhoursreactnative',
  storageBucket: 'afterhoursreactnative.appspot.com',
  messagingSenderId: '37657935947',
  appId: '1:37657935947:web:4849440ea5532f8ca7cdce',
  measurementId: 'G-BGJQRRL9JZ',
  databaseURL: 'afterhoursreactnative.firebaseapp.com',
};

const config = {
  name: 'SECONDARY_APP',
};

if (!firebase.apps.length) {
  firebase.initializeApp(credentials, config);
} else {
  firebase.app(); // if already initialized, use that one
}

const apps = firebase.apps;

const App: () => React$Node = () => {
  apps.forEach((app) => {
    console.log('App name: ', app.name);
  });
  return (
    <LandingScreen />
    // <SignUpScreen />
  );
};

export default App;
