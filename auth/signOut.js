import auth from '@react-native-firebase/auth';

export const signOut = async () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'))
    .catch((error) => {
      console.error(error);
      throw new Error('Error while signing out!');
    });
};
