// src/screens/ChartsTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChartsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Charts</Text>
    </View>
  );
};

export default ChartsTab;

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
