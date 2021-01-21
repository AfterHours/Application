import {Platform, StatusBar, StyleSheet} from 'react-native';
import colors from './colorScheme';

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    //MarginTop needed for ios, for text not to be next to notch
    marginTop: Platform.OS === 'android' ? StatusBar.height : 0,
    //Not a normal css property, part of react native enhancements
    // paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  LoginText: {
    fontSize: 30,
    marginRight: 30,
    fontWeight: 'bold',
    color: '#012e67',
    position: 'absolute',
    top: '0.1%',
    right: '0.1%',
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
    width: 50,
    fontSize: 27,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'right',
  },
  buttonStyles: {
    textAlign: 'center',
    padding: 15,
    margin: 10,
    width: 300,
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
    marginBottom: 60,
  },
});
export default styles;
