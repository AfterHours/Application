import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/email';

function Button(props: {
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

export default Button;
