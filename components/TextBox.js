import React from 'react';
import {View} from 'react-native';
import {TextField} from '@ubaids/react-native-material-textfield';
import styles from '../styles/email';
import {Icon} from 'react-native-elements';

export default function TextBox(props) {
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
}
