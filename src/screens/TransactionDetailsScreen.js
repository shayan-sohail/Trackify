// src/screens/TransactionDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';

const TransactionDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { transaction } = route.params;

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
});
