// src/navigation/BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

// Placeholder screens
import HomeTab from './HomeTab';
import BudgetTab from './BudgetTab';
import LogsTab from './LogsTab';
import ChartsTab from './ChartsTab';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.highlight,
        tabBarInactiveTintColor: Colors.medium,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Budget':
              iconName = 'wallet';
              break;
            case 'Logs':
              iconName = 'file-document';
              break;
            case 'Charts':
              iconName = 'chart-bar';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Budget" component={BudgetTab} />
      <Tab.Screen name="Logs" component={LogsTab} />
      <Tab.Screen name="Charts" component={ChartsTab} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.veryLight,
    height: 60,
  },
  tabBarLabel: {
    fontSize: 12,
    height:20
  },
  tabBarIcon: {
    marginBottom: 0,
    height:30
  }
});
