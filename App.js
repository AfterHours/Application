/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import colors from './colorScheme';

//Default react native imports
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

function SignUpButton(props: {
  css: Object,
  text: string,
  accessibilityLabel: string,
  onPress: () => void,
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyles, props.css]}
      onPress={props.onPress}>
      <Text
        style={styles.buttonText}
        accessibilityLabel={props.accessibilityLabel}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const App: () => React$Node = () => {
  // console.log('React native debugging');
  function getLog() {
    console.log('Text pressed');
    Alert.alert('text pressed!', 'you should have pressed the text');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.LoginText} onPress={() => getLog()}>
        {' '}
        Login{' '}
      </Text>
      <SignUpButton
        text="Sign up with Facebook"
        accessibilityLabel="Sign up with Facebook button"
        css={styles.buttonFacebook}
        onPress={() => {
          console.log('FB Button pressed');
        }}
      />
      <SignUpButton
        text="Sign up with LinkedIn"
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
        accessibilityLabel="Sign up with Email button"
        css={styles.buttonEmail}
        onPress={() => {
          console.log('Email Button pressed');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    //MarginTop needed for ios, for text not to be next to notch
    marginTop: Platform.OS === 'android' ? 32 : 0,
    //Not a normal css property, part of react native enhancements
    // paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  LoginText: {
    fontSize: 30,
    marginRight: 30,
    fontWeight: 'bold',
    color: '#012e67',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  dividerText: {
    width: 50,
    fontSize: 27,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'right',
  },
  buttonStyles: {
    padding: 15,
    margin: 10,
    width: 300,
    borderRadius: 15,
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
  },
  buttonLinkedIn: {
    backgroundColor: '#2867B2',
  },
  buttonEmail: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
    marginBottom: 60,
  },
});

export default App;
