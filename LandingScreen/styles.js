import {Platform, StatusBar, StyleSheet} from 'react-native';
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginContainer: {
    alignSelf: 'flex-end',
    marginRight: wp('5%'),
  },
  loginText: {
    fontSize: hp('4%'),
    // fontSize: 30,
    // marginRight: 30,
    marginRight: wp('7%'),
    fontWeight: 'bold',
    color: '#012e67',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  dividerText: {
    // width: 50,
    width: wp('13%'),
    // fontSize: 27,
    fontSize: hp('4%'),
    textAlign: 'center',
  },
  buttonText: {
    // fontSize: 20,
    fontSize: hp('3%'),
    color: colors.white,
    textAlign: 'center',
  },
  buttonStyles: {
    textAlign: 'center',
    // padding: 15,
    padding: wp('4%'),
    // margin: 10,
    margin: wp('3%'),
    // width: 300,
    width: wp('76%'),
    borderRadius: 15,
  },
  buttonFacebook: {
    backgroundColor: '#4267B2',
  },
  buttonLinkedIn: {
    backgroundColor: '#2867B2',
  },
  buttonEmail: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
    // marginBottom: 60,
    marginBottom: hp('8%'),
  },
});
export default styles;
