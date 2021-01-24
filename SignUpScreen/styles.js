import {StyleSheet} from 'react-native';
import colors from '../colorScheme';

const styles = StyleSheet.create({
  container: {
    //Setting font type works different
    // fontFamily: 'Poppins',
    fontSize: 20,
    flex: 1,
  },
  title: {
    fontSize: 34,
    color: colors.blue,
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
    width: 343,
    height: 44,
    borderRadius: 15,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});
export default styles;
