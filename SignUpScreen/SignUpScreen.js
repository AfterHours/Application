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
import {registerEmail} from '../auth/registerEmail';

const SignUpScreen: () => React$Node = ({navigation}) => {
  const [user, setUser] = React.useState({
    FName: '',
    LName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [state, setState] = React.useState('');
  function onChangeText(name, value) {
    user[name] = value;
  }

  //TODO do something when confirm pass and pass dont match
  //TODO add some red status to indicate to the user what went wrong
  //TODO add checking all fields were filled
  async function register() {
    if (user.password === user.confirmPassword) {
      let status = await registerEmail(user.email, user.confirmPassword);
      if (status) {
        navigation.navigate('ForYou');
      } else {
        setState(status);
      }
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
          <Text style={styles.title}>Create an</Text>
          <Text style={styles.title}>account</Text>
        </View>

        <TextBox
          label={'First Name'}
          keyboardType={'default'}
          onChangeText={(text) => onChangeText('FName', text)}

          // value={value}
        />
        <TextBox
          label={'Last Name'}
          keyboardType={'default'}
          onChangeText={(text) => onChangeText('LName', text)}
          // value={value}
        />
        <TextBox
          label={'Email'}
          keyboardType={'email-address'}
          onChangeText={(text) => onChangeText('email', text)}
          // value={value}
        />
        {/* <View> */}
        <TextBox
          label={'Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={(text) => onChangeText('password', text)}
          // value={value}
        />
        <TextBox
          label={'Confirm Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={(text) => onChangeText('confirmPassword', text)}
          // value={value}
        />
        <View style={styles.buttonContainer}>
          <Button
            css={styles.button}
            text={'Create Account'}
            accessibilityLabel={'Create Account Button'}
            onPress={() => {
              register();
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

export default SignUpScreen;
