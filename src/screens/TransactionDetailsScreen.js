// src/screens/TransactionDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ComboBox from '../components/ComboBox';
import Colors from '../constants/colors';
import MyDatePicker from '../components/MyDatePicker';

const TransactionDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { transaction } = route.params;
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [pickerVisible, setPickerVisible] = useState(false);

  const [selected, setSelected] = useState('apple');
  const items = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ];

  const onUpdate = () => {
    // Implement update logic as needed
    console.log('Update pressed for:', transaction);
    navigation.goBack();
  };

  const onDelete = () => {
    // Implement delete logic as needed
    console.log('Delete pressed for:', transaction);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Title: <Text style={styles.detailValue}>{transaction.title}</Text></Text>
        <Text style={styles.detailLabel}>Date: <Text style={styles.detailValue}>{transaction.date}</Text></Text>
        <Text style={styles.detailLabel}>Amount: <Text style={styles.detailValue}>{transaction.amount}</Text></Text>
        <Text style={styles.detailLabel}>Category: <Text style={styles.detailValue}>{transaction.category}</Text></Text>
        <Text style={styles.detailLabel}>Color: <Text style={styles.detailValue}>{transaction.color}</Text></Text>
        <Text style={styles.detailLabel}>Icon: <Text style={styles.detailValue}>{transaction.icon}</Text></Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>


      <View style={styles.container}>
        <ComboBox
          items={items}
          selectedValue={selected}
          onValueChange={(val) => setSelected(val)}
          initialValue="apple"
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Selected Date:</Text>
        <Text style={styles.dateText}>{selectedDate.toLocaleDateString()}</Text>
        <TouchableOpacity style={styles.openButton} onPress={() => setShowPicker(true)}>
          <Text style={styles.openButtonText}>Open Date Picker</Text>
        </TouchableOpacity>

        <MyDatePicker
          visible={showPicker}
          initialDate={selectedDate}
          onDateChange={(date) => setSelectedDate(date)}
          onRequestClose={() => setShowPicker(false)}
        />
      </View>
    </View>
  );
};

export default TransactionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.dark,
  },
  detailsContainer: {
    marginBottom: 30,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: Colors.dark,
  },
  detailValue: {
    fontWeight: 'normal',
    color: Colors.medium,
  },
  button: {
    backgroundColor: Colors.highlight,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.dark,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 20,
    color: Colors.medium,
  },
  openButton: {
    backgroundColor: Colors.highlight,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
