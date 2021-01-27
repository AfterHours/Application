import {StyleSheet} from 'react-native';
import colors from '../colorScheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleContainer: {
    alignSelf: 'flex-end',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 34,
    lineHeight: 51,
    color: colors.blue,
  },
  buttonContainer: {
    marginTop: '10%',
  },
  button: {
    width: 343,
    height: 44,
    borderRadius: 15,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 30,
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
