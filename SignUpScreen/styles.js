import {StyleSheet} from 'react-native';
import colors from '../colorScheme';

const styles = StyleSheet.create({
  container: {
    //Setting font type works different
    // fontFamily: 'Poppins',
    fontSize: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  signupContainer: {
    flex: 1,
    width: 135,
    alignItems: 'center',
    // justifyContent: 'flex-end',
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
  bottomWave: {
    position: 'absolute',
    width: 265.5,
    right: 0,
    bottom: 0,
  },
  TopWave: {
    position: 'absolute',
    width: 416.5,
    height: 351,
    left: 0,
    top: 0,
  },
});
export default styles;
