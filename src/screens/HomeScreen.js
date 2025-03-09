// src/navigation/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabs from './BottomTabs';
import Colors from '../constants/colors';
import Sidebar from '../components/Sidebar';
import MyButton from '../components/MyButton';

const TOP_BAR_HEIGHT = 50;
const ICON_SIZE = 24;

const HomeScreen = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed top row */}
      <View style={styles.topBar}>
        <MyButton style={styles.iconButton} onPress={openDrawer} onClickedBackgroundColor={Colors.mediumLight}>
          <Icon name="menu" size={ICON_SIZE} color={Colors.dark} />
        </MyButton>

        <View style={styles.rightIcons}>
          <MyButton style={styles.iconButton} onClickedBackgroundColor={Colors.mediumLight}>
            <Icon name="magnify" size={ICON_SIZE} color={Colors.dark} />
          </MyButton>

          <MyButton style={styles.iconButton} onClickedBackgroundColor={Colors.mediumLight}>
            <Icon name="account-circle" size={ICON_SIZE} color={Colors.dark} />
          </MyButton>
        </View>
      </View>

      {/* Always render Sidebar */}
      <Sidebar
        visible={drawerVisible}
        onClose={closeDrawer}
        drawerOffset={Platform.OS === 'android' ? StatusBar.currentHeight : 0}
      />

      {/* Tab Navigator below */}
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topBar: {
    height: TOP_BAR_HEIGHT,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 1, // Lower zIndex for top bar
  },
  iconButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  rightIcons: {
    flexDirection: 'row',
  },
});
