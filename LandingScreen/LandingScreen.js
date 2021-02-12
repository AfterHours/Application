/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';

import styles from './styles';
import SignUpButton from '../components/SignUpButton';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

const LandingScreen: () => React$Node = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    console.log('Connecting to firebase');
  }
  //
  //TODO change this after for you page done
  if (!user) {
    // navigation.push('SignUpEmail');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text
          style={styles.loginText}
          onPress={() => {
            console.log('Login Button Clicked');
            navigation.push('Login');
          }}>
          Login
        </Text>
      </View>
      <View>
        <SignUpButton
          text="Sign up with Facebook"
          platform="facebook-square"
          type="font-awesome-5"
          accessibilityLabel="Sign up with Facebook button"
          css={styles.buttonFacebook}
          onPress={async () => {
            console.log('FB Button pressed');
            await analytics().logEvent('FB_Button_pressed', {
              description: 'User clicked on signup with facebook button',
            });
          }}
        />
        <SignUpButton
          text="Sign up with LinkedIn"
          platform="linkedin"
          type="font-awesome-5"
          accessibilityLabel="Sign up with LinkedIn button"
          css={styles.buttonLinkedIn}
          onPress={() => {
            console.log('LinkedIn Button pressed');
          }}
        />

        <View style={[styles.buttonStyles, styles.row]}>
          <View style={styles.dividerLine} />
          <View>
            <Text style={styles.dividerText}>or</Text>
          </View>
          <View style={styles.dividerLine} />
        </View>

        <SignUpButton
          text="Sign up with Email"
          platform="envelope"
          type="font-awesome-5"
          accessibilityLabel="Sign up with Email button"
          css={styles.buttonEmail}
          onPress={() => {
            console.log('Email Button pressed');
            navigation.push('SignUp');
          }}
        />
      </View>
      <Image
        style={styles.bottomWave}
        source={require('../images/LandingBottom.png')}
      />
    </SafeAreaView>
  );
};

export default LandingScreen;
