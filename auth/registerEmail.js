import auth from '@react-native-firebase/auth';

export const registerEmail = async (email, password) => {
  return await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      return true;
    })
    .catch((error) => {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      return false;
    });
};
