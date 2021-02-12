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
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {TextField} from '@ubaids/react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from '../styles/email';
import {Icon} from 'react-native-elements';
import Button from '../components/Button';

const TextBox = (props) => {
  const [secure, setSecure] = React.useState(props.secureTextEntry);
  return (
    <View>
      <TextField
        style={styles.textField}
        label={props.label}
        keyboardType={props.keyboardType}
        secureTextEntry={secure}
      />
      {props.secureTextEntry && (
        <View style={styles.passwordIcon}>
          <Icon
            name={secure ? 'eye-slash' : 'eye'}
            type="font-awesome-5"
            size={20}
            color="gray"
            onPress={() => setSecure(!secure)}
          />
        </View>
      )}
    </View>
  );
};

const LoginScreen: () => React$Node = () => {
  const [value, onChangeText] = React.useState('');

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
          onChangeText={(text) => onChangeText(text)}
          // value={value}
        />
        {/* <View> */}
        <TextBox
          style={styles.textBox}
          label={'Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={(text) => onChangeText(text)}
          // value={value}
        />
        <View style={styles.buttonContainer}>
          <Button
            css={styles.button}
            text={'Login'}
            accessibilityLabel={'Login Button'}
            onPress={() => {
              console.log('TODO SOMETHING');
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
