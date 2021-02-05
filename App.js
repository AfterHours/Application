/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import LandingScreen from './LandingScreen/LandingScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBJpla0_J-bleeJFWn6lUidRUAbS-S8WP0',
  authDomain: 'afterhoursreactnative.firebaseapp.com',
  projectId: 'afterhoursreactnative',
  storageBucket: 'afterhoursreactnative.appspot.com',
  messagingSenderId: '37657935947',
  appId: '1:37657935947:web:4849440ea5532f8ca7cdce',
  measurementId: 'G-BGJQRRL9JZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App: () => React$Node = () => {
  return (
    <LandingScreen />
    // <SignUpScreen />
  );
};

export default App;
