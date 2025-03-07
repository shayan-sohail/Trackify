// src/screens/LogsTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logs</Text>
    </View>
  );
};

export default LogsTab;

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
