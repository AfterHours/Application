import {StyleSheet} from 'react-native';
import colors from '../colorScheme';

const styles = StyleSheet.create({
  container: {
    //Setting font type works different
    // fontFamily: 'Poppins',
    fontSize: 20,
  },
  textInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: 15,
    margin: 10,
    width: 300,
    borderRadius: 15,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});
export default styles;
