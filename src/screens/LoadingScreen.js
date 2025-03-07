// src/screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // Clear stack and go to HomeScreen
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.highlight} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
