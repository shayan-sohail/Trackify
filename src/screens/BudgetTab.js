// src/screens/BudgetTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BudgetTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Budget</Text>
    </View>
  );
};

export default BudgetTab;

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
