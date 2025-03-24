import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/colors';
import IconButton from '../../components/Buttons/IconButton';
import BaseButton from '../../components/Buttons/BaseButton';
import {PlaneTextButton} from '../../components/Buttons/LabelButton';

import { RightDrawerContext } from '../HomeContainerScreen';  // Add this import

const ICON_SIZE = 25;

const TRANSACTIONS = [
  { id: '1', title: 'Electricity Bill', date: new Date('2024-03-13T17:30:00'), amount: '-$2,89.50', category: 'Utility', color: '#FFCFCF', icon: 'magnify' },
  { id: '2', title: 'Home Insurance', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Rent', color: '#D4F8D4', icon: 'magnify' },
  { id: '3', title: 'Coffee Shops', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Dining', color: '#D4F8D4', icon: 'magnify' },
  { id: '4', title: 'Marcus Bennett', date: new Date('2024-03-13T17:30:00'), amount: '-$2,89.50', category: 'Healthcare', color: '#FFCFCF', icon: 'magnify' },
  { id: '5', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '6', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '7', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '8', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '9', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '10', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '11', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '12', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '13', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '14', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '15', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '16', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '17', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  { id: '18', title: 'Parking Fees', date: new Date('2024-03-13T17:30:00'), amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
];

const HomeTab = () => {
  const dataToShow = TRANSACTIONS;
  const navigation = useNavigation();
  const { openRightDrawer } = useContext(RightDrawerContext);  // Add this line

  const renderItem = ({ item }) => (
    <BaseButton
      onClickedBackgroundColor={Colors.light}
      style={styles.transactionItem}
      onPress={() => navigation.navigate("TransactionDetailsScreen", { transaction: item })}
    >
      <View style={[styles.iconBox, { backgroundColor: item.color }]}>
        <Icon name={item.icon} size={20} color="black" />
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>
          {item.date.toLocaleDateString()} {item.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.amount, item.amount.startsWith("+") ? styles.income : styles.expense]}>
          {item.amount}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </BaseButton>
  );

  return (
    <>
      <View style={styles.topBar}>
        <IconButton
          iconName="menu"
          size={ICON_SIZE}
          color= {Colors.veryLight}
          style={styles.iconButton}
          onPress={() => openRightDrawer()} 
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

      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <>
            {/* Full-width top section (no horizontal padding) */}
            <View style={styles.topSection}>
              <Text style={styles.totalBalanceLabel}>Total Balance</Text>
              <Text style={styles.totalBalanceValue}>$120,908</Text>
              <View style={styles.incomeExpenseRow}>
                <BaseButton style={styles.incomeBox} onPress={() => navigation.navigate("TransactionDetailsScreen", { transactionType: 'income' })}>
                  <Icon style={styles.circleIcon} name="arrow-top-right-thin" size={ICON_SIZE} color={Colors.veryLight} />
                  <View style={styles.ieTextContainer}>
                    <Text style={styles.incomeText}>$34,678</Text>
                    <Text style={styles.label}>Income</Text>
                  </View>
                  <View style={styles.addButton}>
                    <Icon style={styles.addButtonIcon} name="plus" size={ICON_SIZE} color={Colors.veryLight} />
                  </View>
                </BaseButton>

                <BaseButton style={styles.expenseBox} onPress={() => navigation.navigate("TransactionDetailsScreen", { transactionType: 'expense' })}>
                  <Icon style={styles.circleIcon} name="arrow-bottom-right-thin" size={ICON_SIZE} color={Colors.veryLight} />
                  <View style={styles.ieTextContainer}>
                    <Text style={styles.expenseText}>$19,678</Text>
                    <Text style={styles.label}>Expense</Text>
                  </View>
                  <View style={styles.addButton}>
                    <Icon style={styles.addButtonIcon} name="plus" size={ICON_SIZE} color={Colors.veryLight} />
                  </View>
                </BaseButton>
              </View>
            </View>

            {/* Padded container for the “Recent Transactions” heading */}
            <View style={styles.headerPadding}>
              <View style={styles.titleRow}>
                <Text style={styles.recentTransactions}>Recent Transactions</Text>
                <PlaneTextButton onPress={() => navigation.navigate('Logs')} label='View All' style={styles.viewAll}/>
              </View>
            </View>
            
          </>
        )}
        contentContainerStyle={styles.listContainer}
      />



    </>
  
);
};

export default HomeTab;

const styles = StyleSheet.create({
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 12,
    color: Colors.medium,
  },
  circleIcon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  date: {
    fontSize: 12,
    color: Colors.medium,
  },
  expense: {
    color: 'red',
  },
  expenseBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flex: 1,
    marginLeft: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  expenseText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.veryLight,
  },
  headerPadding: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.veryLight,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  ieTextContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginRight: 20,
  },
  income: {
    color: 'green',
  },
  incomeBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flex: 1,
    marginRight: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  incomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.veryLight,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: Colors.veryLight,
  },
  listContainer: {
    backgroundColor: Colors.veryLight,
    paddingBottom: 20,
  },
  midContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  recentTransactions: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.dark,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    marginBottom: 3,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  topBar: {
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    zIndex: 1,
  },
  topSection: {
    backgroundColor: Colors.highlight,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  totalBalanceLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 50,
  },
  totalBalanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    backgroundColor: Colors.veryLight,
  },
  viewAll: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '500',
  },
});
