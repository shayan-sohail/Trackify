// src/screens/AddTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add</Text>
    </View>
  );
};

export default AddTab;

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
