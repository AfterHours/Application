import auth from '@react-native-firebase/auth';

export const signIn = async (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
      return true;
    })
    .catch((error) => {
      console.error(error);
      if (error.code === 'auth/invalid-email') {
        console.log('That email address or password is invalid!');
        return false;
      } else {
        console.log('Error with sign in', error);
      }
      return 'error';
    });
};
