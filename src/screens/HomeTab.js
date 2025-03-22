// src/screens/HomeTab.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';
import BaseButton from '../components/Buttons/BaseButton';
import {PlaneTextButton} from '../components/Buttons/LabelButton';

const ICON_SIZE = 24;

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
  const [showModal, setShowModal] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
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
    </TouchableOpacity>
  );

  const onLeftPress = () => {
    // e.g., close modal
    setShowModal(false);
  };

  const onRightPress = () => {
    // e.g., confirm action, then close
    console.log('Confirmed expense');
    setShowModal(false);
  };

  return (
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
                <Icon style={styles.addButtonIcon} name="plus" size={ICON_SIZE} color="green" />
              </View>
            </BaseButton>

            <BaseButton style={styles.expenseBox} onPress={() => navigation.navigate("TransactionDetailsScreen", { transactionType: 'expense' })}>
              <Icon style={styles.circleIcon} name="arrow-bottom-right-thin" size={ICON_SIZE} color={Colors.veryLight} />
              <View style={styles.ieTextContainer}>
                <Text style={styles.expenseText}>$19,678</Text>
                <Text style={styles.label}>Expense</Text>
              </View>
              <View style={styles.addButton}>
                <Icon style={styles.addButtonIcon} name="plus" size={ICON_SIZE} color="#ef625c" />
              </View>
            </BaseButton>
          </View>
        </View>

        {/* Padded container for the “Recent Transactions” heading */}
        <View style={styles.headerPadding}>
          <View style={styles.titleRow}>
            <Text style={styles.recentTransactions}>Recent Transactions</Text>
            <PlaneTextButton onPress={() => console.log('View All pressed')} label='View All' style={styles.viewAll}/>
          </View>
        </View>
      </>
    )}
    contentContainerStyle={styles.listContainer}
  />
);
};

export default HomeTab;

const styles = StyleSheet.create({
  // The entire list background, bottom padding
  listContainer: {
    backgroundColor: Colors.veryLight,
    paddingBottom: 20,
  },

  // Container for the top header
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  // The top section with the blue background
  topSection: {
    backgroundColor: Colors.highlight,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerPadding: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.veryLight,
  },
  totalBalanceLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  totalBalanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
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
  circleIcon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  ieTextContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginRight: 20,
  },
  incomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.veryLight,
  },
  expenseText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.veryLight,
  },
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
  label: {
    fontSize: 12,
    color: Colors.veryLight,
  },

  // Title row for the transactions
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentTransactions: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.dark,
  },
  viewAll: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '500',
  },

  // Transaction item
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    marginBottom: 3,
  },
  date: {
    fontSize: 12,
    color: Colors.medium,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  income: {
    color: 'green',
  },
  expense: {
    color: 'red',
  },
  category: {
    fontSize: 12,
    color: Colors.medium,
  },
});
