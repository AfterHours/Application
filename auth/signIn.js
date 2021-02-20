import auth from '@react-native-firebase/auth';

export const signIn = async (email, password) => {
  let code;
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
      code = true;
    })
    .catch((error) => {
      console.error(error);
      if (error.code === 'auth/invalid-email') {
        console.log('The email address or password is invalid!');
        code = false;
      } else {
        //TODO WHY DOES THIS NOT RUN ON ERROR
        console.log('Error with sign in', error);
      }
      code = 'error';
    });
  return code;
};
