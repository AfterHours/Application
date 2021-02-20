/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * https://github.com/n4kz/react-native-material-textfield
 * https://github.com/n4kz/react-native-material-textfield/issues/249#issuecomment-610895464
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from '../styles/email';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import {signIn} from '../auth/signIn';

const LoginScreen: () => React$Node = ({navigation}) => {
  const [email, setEmail] = React.useState(' ');
  const [password, setPassword] = React.useState(' ');
  const [loginStatus, setLoginStatus] = React.useState('');

  async function login() {
    console.log('login function executed');
    const status = await signIn(email, password);
    if (status) {
      console.log('User successfully logged in!');
      setLoginStatus('passed');
      navigation.navigate('Login');
    } else if (status == false) {
      console.log('User failed tp log in!');
      setLoginStatus('failed');
    } else {
      console.log('User failed to login due to some unknown error');
      setLoginStatus('error');
    }
  }

  return (
    // <SafeAreaView style={email.container}>
    <KeyboardAwareScrollView
      style={{backgroundColor: '#fff'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      extraHeight={150}
      extraScrollHeight={20}
      scrollEnabled={false}>
      <Image style={styles.TopWave} source={require('../images/Top.png')} />
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>Back!</Text>
        </View>
        <TextBox
          label={'Email'}
          keyboardType={'email-address'}
          onChangeText={(text) => setEmail(text)}
          // value={value}
        />
        {/* <View> */}
        <TextBox
          style={styles.textBox}
          label={'Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          // value={value}
        />
        <View style={styles.buttonContainer}>
          <Button
            css={styles.button}
            text={'Login'}
            accessibilityLabel={'Login Button'}
            onPress={() => {
              console.log('attempting to login button pressed');
              login();
            }}
          />
        </View>
      </View>
      <Image
        style={styles.bottomWave}
        source={require('../images/Bottom.png')}
      />
    </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
};

export default LoginScreen;
