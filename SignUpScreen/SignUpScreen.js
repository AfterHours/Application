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

import styles from './styles';
import {Icon} from 'react-native-elements';
// Icon.loadFont();
function SignUpButton(props: {
  css: Object,
  text: string,
  platform: string,
  accessibilityLabel: string,
  onPress: () => void,
}) {
  return (
    <>
      <TouchableOpacity
        style={props.css}
        onPress={props.onPress}
        activeOpacity={0.9}>
        <Text
          style={styles.buttonText}
          accessibilityLabel={props.accessibilityLabel}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

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

const SignUpScreen: () => React$Node = () => {
  const [value, onChangeText] = React.useState('');

  return (
    // <SafeAreaView style={styles.container}>
    <KeyboardAwareScrollView
      style={{backgroundColor: '#fff'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      extraHeight={150}
      extraScrollHeight={20}
      scrollEnabled={false}>
      <Image style={styles.TopWave} source={require('./images/Top.png')} />
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create an</Text>
          <Text style={styles.title}>account</Text>
        </View>

        <TextBox
          label={'First Name'}
          keyboardType={'default'}
          onChangeText={(text) => onChangeText(text)}

          // value={value}
        />
        <TextBox
          label={'Last Name'}
          keyboardType={'default'}
          onChangeText={(text) => onChangeText(text)}
          // value={value}
        />
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
        <TextBox
          style={styles.textBox}
          label={'Confirm Password'}
          keyboardType={'default'}
          secureTextEntry={true}
          onChangeText={(text) => onChangeText(text)}
          // value={value}
        />
        <View style={styles.buttonContainer}>
          <SignUpButton
            css={styles.button}
            text={'Create Account'}
            accessibilityLabel={'Create Account Button'}
            onPress={() => {
              console.log('TODO SOMETHING');
            }}
          />
        </View>
      </View>
      <Image
        style={styles.bottomWave}
        source={require('./images/Bottom.png')}
      />
    </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
};

export default SignUpScreen;
