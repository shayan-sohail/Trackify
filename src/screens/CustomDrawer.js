// src/components/CustomDrawer.js
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  Easing,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/colors';
import {PlaneIconLabelButton} from '../components/Buttons/IconLabelButton';

const ICON_SIZE = 18;
const BTN_CLICKED_CLR = Colors.light;

const CustomDrawer = () => {

  return (
    <View style={[styles.container]}>
        <View style={styles.drawerHeader}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.drawerLogo}
            resizeMode="contain"
          />
        </View>

        {/* Menu Items */}
        <View style={styles.menuList}>
          <PlaneIconLabelButton style={styles.menuItem} 
            iconName='clock-outline' 
            iconSize={ICON_SIZE} 
            iconColor={Colors.dark}
            onClickedBackgroundColor={BTN_CLICKED_CLR}
            iconStyle={styles.menuIcon} 
            label='Recent'
            onPress={() => console.log('Recent pressed')} 
            labelStyle={styles.menuItemText}
          />
          
          <PlaneIconLabelButton style={styles.menuItem} 
            iconName='image-outline' 
            iconSize={ICON_SIZE} 
            iconColor={Colors.dark}
            onClickedBackgroundColor={BTN_CLICKED_CLR}
            iconStyle={styles.menuIcon} 
            label='Images'
            onPress={() => console.log('Images pressed')} 
            labelStyle={styles.menuItemText}
          />
          
          <PlaneIconLabelButton style={styles.menuItem} 
            iconName='movie-outline' 
            iconSize={ICON_SIZE} 
            iconColor={Colors.dark}
            onClickedBackgroundColor={BTN_CLICKED_CLR}
            iconStyle={styles.menuIcon} 
            label='Videos'
            onPress={() => console.log('Videos pressed')} 
            labelStyle={styles.menuItemText}
          />

          <PlaneIconLabelButton style={styles.menuItem} 
            iconName='music-note-outline' 
            iconSize={ICON_SIZE} 
            iconColor={Colors.dark}
            onClickedBackgroundColor={BTN_CLICKED_CLR}
            iconStyle={styles.menuIcon} 
            label='Audios'
            onPress={() => console.log('Audios pressed')} 
            labelStyle={styles.menuItemText}
          />

          <PlaneIconLabelButton style={styles.menuItem} 
            iconName="file-outline"
            iconSize={ICON_SIZE} 
            iconColor={Colors.dark}
            onClickedBackgroundColor={BTN_CLICKED_CLR}
            iconStyle={styles.menuIcon} 
            label='Documents'
            onPress={() => console.log('Documents pressed')} 
            labelStyle={styles.menuItemText}
          />

          {/* Separator */}
          <View style={styles.separator} />
          
          <PlaneIconLabelButton style={styles.menuItem} 
            iconName="download"
            iconSize={ICON_SIZE} 
            iconColor={Colors.highlight}
            onClickedBackgroundColor={BTN_CLICKED_CLR}
            iconStyle={styles.menuIcon} 
            label='Downloads'
            onPress={() => console.log('Downloads pressed')} 
            labelStyle={[styles.menuItemText, { color: Colors.highlight }]}
          />    
        </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  drawerContainer: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  drawerHeader: {
    height: 60,
    paddingVertical:40,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
  },
  drawerLogo: {
    width: 120,
    height: 50,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  menuItemText: {
    fontSize: 14,
    color: Colors.dark,
    fontWeight: '500',
  },
  menuList: {
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
