// src/screens/HomeTab.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; 
import Colors from '../constants/colors';
import MyButton from '../components/MyButton';

const ICON_SIZE = 24;
const TRANSACTIONS = [
  { id: '1', title: 'Electricity Bill', date: '13 Jun, 5:30PM', amount: '-$2,89.50', category: 'Utility', color: '#FFCFCF', icon: 'magnify' },
  { id: '2', title: 'Home Insurance', date: '13 Jun, 5:30PM', amount: '+$2,89.50', category: 'Rent', color: '#D4F8D4', icon: 'magnify' },
  { id: '3', title: 'Coffee Shops', date: '13 Jun, 5:30PM', amount: '+$2,89.50', category: 'Dining', color: '#D4F8D4', icon: 'magnify' },
  { id: '4', title: 'Marcus Bennett', date: '13 Jun, 5:30PM', amount: '-$2,89.50', category: 'Healthcare', color: '#FFCFCF', icon: 'magnify' },
  { id: '5', title: 'Parking Fees', date: '13 Jun, 5:30PM', amount: '+$2,89.50', category: 'Transport', color: '#D4F8D4', icon: 'magnify' },
  // ... other transactions
];

const HomeTab = () => {
  const dataToShow = TRANSACTIONS.slice(0, 10);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.transactionItem}
      onPress={() => navigation.navigate("TransactionDetailsScreen", { transaction: item })}
    >
      {/* Left icon box */}
      <View style={[styles.iconBox, { backgroundColor: item.color }]}>
         <Icon name={item.icon} size={20} color={'black'} />
      </View>

      {/* Middle text */}
      <View style={styles.midContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      {/* Right side */}
      <View style={styles.rightContainer}>
        <Text style={[styles.amount, item.amount.startsWith("+") ? styles.income : styles.expense]}>
          {item.amount}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.totalBalanceLabel}>Total Balance</Text>
        <Text style={styles.totalBalanceValue}>$120,908</Text>
        <View style={styles.incomeExpenseRow}>
          <MyButton style={styles.incomeBox} onPress={() => navigation.replace("SignUpScreen")}>
            <Icon style={styles.circleIcon} name="arrow-top-right-thin" size={ICON_SIZE} color={Colors.veryLight} />
            <View style={styles.ieTextContainer}>
              <Text style={styles.incomeText}>$34,678</Text>
              <Text style={styles.label}>Income</Text>
            </View>
            <View style={styles.addButton}>
              <Icon style={styles.addButtonIcon} name="plus" size={ICON_SIZE} color='green' />
            </View>
          </MyButton>
          <MyButton style={styles.expenseBox} onPress={() => console.log('Add pressed')}>
            <Icon style={styles.circleIcon} name="arrow-bottom-right-thin" size={ICON_SIZE} color={Colors.veryLight} />
            <View style={styles.ieTextContainer}>
              <Text style={styles.expenseText}>$19,678</Text>
              <Text style={styles.label}>Expense</Text>
            </View>
            <View style={styles.addButton}>
              <Icon style={styles.addButtonIcon} name="plus" size={ICON_SIZE} color='#ef625c' />
            </View>
          </MyButton>
        </View>        
      </View>

      {/* Bottom Section with Transactions */}
      <View style={styles.bottomSection}>
        <View style={styles.titleRow}>
          <Text style={styles.recentTransactions}>Recent Transactions</Text>
          <TouchableOpacity onPress={() => console.log('View All pressed')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataToShow}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
  },
  topSection: {
    backgroundColor: Colors.highlight,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: -10,
    alignItems: 'center',
    position: 'relative',
  },
  totalBalanceLabel: {
    marginTop: -20,
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
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    flex: 1,
    marginRight: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  expenseBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    flex: 1,
    marginLeft: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  circleIcon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  ieTextContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginRight: 25,
    marginLeft: -4,
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
  bottomSection: {
    flex: 1,
    marginTop: -10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  listContainer: {
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
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
  iconText: {
    fontSize: 16,
    color: Colors.dark,
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
