// src/components/DatePicker.js
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Platform, StyleSheet, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const DatePicker = ({ visible, onDateChange, initialDate = new Date(), onRequestClose }) => {
  const [date, setDate] = useState(initialDate);

  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange && onDateChange(selectedDate);
    }
    if (Platform.OS === 'android') {
      onRequestClose && onRequestClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      <View style={styles.pickerContainer}>
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleChange}
          style={styles.datePicker}
        />
      </View>
    </Modal>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: '#fff',
    width: width * 0.85, // Numeric value instead of percentage string
    alignSelf: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  datePicker: {
    width: width * 0.85, // Numeric width calculated from device width
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  doneButton: {
    backgroundColor: Colors.highlight,
    padding: 16,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
