import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    fontSize: hp('4%'),
    color: colors.blue,
  },
  buttonContainer: {
    marginTop: hp('2%'),
  },
  passwordIcon: {
    alignSelf: 'flex-end',
    top: hp('-4%'),
  },
  button: {
    width: wp('70%'),
    height: hp('6%'),
    borderRadius: 15,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: colors.white,
    textAlign: 'center',
  },
  bottomWave: {
    position: 'absolute',
    width: wp('70%'),
    right: 0,
    bottom: -20,
  },
  TopWave: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('50%'),
    left: 0,
    top: -40,
  },
});
export default styles;
