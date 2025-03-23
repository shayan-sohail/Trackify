import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import BottomTabs from './Tabs/BottomTabs';
import Colors from '../constants/colors';

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.veryLight,
  },
});
