import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../LandingScreen/styles';
import {Icon} from 'react-native-elements';

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
        style={[styles.buttonStyles, props.css]}
        onPress={props.onPress}
        activeOpacity={0.9}>
        <Text
          style={styles.buttonText}
          accessibilityLabel={props.accessibilityLabel}>
          {' '}
          <Icon
            name={props.platform}
            size={20}
            type="font-awesome-5"
            color="#FFF"
          />
          {'   ' + props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default SignUpButton;
