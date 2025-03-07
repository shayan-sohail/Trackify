// src/screens/HomeTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyButton from '../components/MyButton'; // For password

const HomeTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
