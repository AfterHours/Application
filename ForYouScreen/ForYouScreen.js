/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

import styles from './ForYouScreenStyles';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

const LandingScreen: () => React$Node = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.HamMenuIcon}
          source={require('../images/HamMenuIcon.png')}
        />
        <View>
          <Text style={styles.headerText}>For You</Text>
        </View>
        <Image
          style={styles.ChatIcon}
          source={require('../images/ChatIcon.png')}
        />
      </View>
      <Image
        style={styles.LoverStack}
        source={require('../images/LoverStack.png')}
      />

      <Image
        style={styles.MatchButtonBackground}
        source={require('../images/MatchButtonBackground.png')}
      />
    </SafeAreaView>
  );
};

export default LandingScreen;
