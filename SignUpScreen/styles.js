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
    fontSize: hp('5%'),
    lineHeight: 51,
    color: colors.blue,
  },
  buttonContainer: {
    marginTop: hp('10%'),
  },
  button: {
    width: wp('70%'),
    height: wp('12%'),
    borderRadius: 15,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: hp('3%'),
    lineHeight: hp('3%'),
    color: colors.white,
    textAlign: 'center',
  },
  bottomWave: {
    position: 'absolute',
    width: wp('70%'),
    right: 0,
    bottom: 0,
  },
  TopWave: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('45%'),
    left: 0,
    top: 0,
  },
});
export default styles;
