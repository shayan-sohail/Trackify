import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import BottomTabs from './BottomTabs';
import IconButton from '../components/Buttons/IconButton';
import Colors from '../constants/colors';
import Sidebar from '../components/Sidebar';

const TOP_BAR_HEIGHT = 50;
const ICON_SIZE = 24;

const HomeScreen = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const navigation = useNavigation();
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
        <IconButton
          iconName="menu"
          size={ICON_SIZE}
          color= {Colors.veryLight}
          onPress={(state) => openDrawer()}
          value={drawerVisible}
        />

        <View style={styles.rightIcons}>
          <IconButton
            iconName="magnify"
            size={ICON_SIZE}
            color= {Colors.veryLight}
            style={styles.iconButton}
            onPress={(state) => navigation.replace('SignUpScreen')}
          />
          <IconButton
            iconName="account-circle"
            size={ICON_SIZE}
            color= {Colors.veryLight}
            style={styles.iconButton}
            onPress={(state) => navigation.replace('LoginScreen')}
          />
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topBar: {
    height: TOP_BAR_HEIGHT,
    backgroundColor: Colors.highlight,
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
