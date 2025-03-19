import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMultiPickerButtonWithModal from '../components/Buttons/IconMultiPickerButtonWithModal';
import IconPickerButtonWithModal from '../components/Buttons/IconPickerButtonWithModal';
import IconPickerButtonCycling from '../components/Buttons/IconPickerButtonCycling';
import Colors from '../constants/colors';

// Using the same transaction data from HomeTab
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

const LogsTab = () => {
  const navigation = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDates, setSelectedDates] = useState(0);
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const categoryOptions = [
    { icon: 'food', icon2: 'arrow-top-right', label: 'Food' },
    { icon: 'car', icon2: 'arrow-bottom-right', label: 'Transport' },
    { icon: 'shopping', icon2: 'arrow-top-right', label: 'Shopping' },
    { icon: 'movie', icon2: 'arrow-bottom-right', label: 'Entertainment' },
  ];

  const dateOptions = [
    { icon: 'calendar-import', label: 'Newest' },
    { icon: 'calendar-export', label: 'Oldest' },
  ];

  const typeOptions = [
    { icon: 'swap-vertical', label: 'All' },
    { icon: 'arrow-top-right', label: 'Income' },
    { icon: 'arrow-bottom-right', label: 'Expense' },
  ];

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

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>Transactions</Text>
        <View style={styles.filtersContainer}>
          <IconPickerButtonWithModal
            items={typeOptions}
            selectedIndex={selectedIconIndex}
            onSelect={setSelectedIconIndex}
            showLabel={true}
            size={15}
            style={styles.filterButton}
          />
          <IconPickerButtonCycling
            items={dateOptions}
            selectedIndex={selectedDates}
            onSelect={setSelectedDates}
            showLabel={true}
            chevronType='double'
            size={15}
          />
          <IconMultiPickerButtonWithModal
            items={categoryOptions}
            selectedItems={selectedCategories}
            onSelect={setSelectedCategories}
            defaultLabel="Category"
            defaultIcon="filter-variant"
            showLabel={false}
            size={15}
            sortItems={true}
            showSelectionControls={true}
            style={styles.filterButton}
          />
        </View>
      </View>

      <FlatList
        data={TRANSACTIONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: Colors.veryLight,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
  },
  filtersContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 8,
  },
  listContainer: {
    paddingBottom: 20,
  },
  // Copy all transaction item related styles from HomeTab
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

export default LogsTab;