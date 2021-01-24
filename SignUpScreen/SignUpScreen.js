/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

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
  return (
    <TextInput
      defaultValue={props.defaultValue}
      style={styles.textInput}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={20}
    />
  );
};

const SignUpScreen: () => React$Node = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <SafeAreaView>
      <Text style={styles.title}>Create an account</Text>
      <TextBox
        defaultValue={'First Name'}
        multiline
        numberOfLines={1}
        onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <TextBox
        defaultValue={'Last Name'}
        multiline
        numberOfLines={1}
        onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <TextBox
        defaultValue={'Email'}
        multiline
        numberOfLines={1}
        onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <TextBox
        defaultValue={'Password'}
        multiline
        numberOfLines={1}
        onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <TextBox
        defaultValue={'Confirm Password'}
        multiline
        numberOfLines={1}
        onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <SignUpButton
        css={styles.button}
        text={'Create Account'}
        accessibilityLabel={'Create Account Button'}
        onPress={() => {
          console.log('TODO SOMETHING');
        }}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;
