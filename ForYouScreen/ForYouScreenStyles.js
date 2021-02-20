import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../colorScheme';

const styles = StyleSheet.create({
  container: {
    //MarginTop needed for ios, for text not to be next to notch
    // marginTop: Platform.OS === 'android' ? StatusBar.height : 0,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: 300,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: hp('3%'),
    paddingLeft: hp('6%'),
    paddingRight: hp('6%'),
    color: colors.black,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
  },
  dividerText: {
    width: wp('13%'),
    fontSize: hp('2.5%'),
    textAlign: 'center',
    color: 'grey',
  },
  buttonStyles: {
    justifyContent: 'center',
    height: hp('6%'),
    margin: wp('3%'),
    width: wp('70%'),
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp('2%'),
    color: colors.white,
    textAlign: 'center',
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
  },
  buttonLinkedIn: {
    backgroundColor: '#2867B2',
  },
  buttonEmail: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
    marginBottom: hp('8%'),
  },
});
export default styles;
