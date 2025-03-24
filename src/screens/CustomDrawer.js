import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Colors from '../constants/colors';
import { PlaneIconLabelButton } from '../components/Buttons/IconLabelButton';

const ICON_SIZE = 18;
const BTN_CLICKED_CLR = Colors.light;

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.drawerLogo}
            resizeMode="contain"
          />
        </View>

        {/* Default drawer items */}
        <DrawerItemList {...props} />

        {/* Custom Menu Items */}
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
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Custom Drawer Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  drawerHeader: {
    height: 60,
    paddingVertical: 40,
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
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.medium + '20',
    backgroundColor: Colors.light,
  },
  footerText: {
    fontSize: 14,
    color: Colors.dark,
  },
});

export default CustomDrawer;