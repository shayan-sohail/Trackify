// src/components/ComboBox.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ComboBox = ({ items, selectedValue, onValueChange, initialValue }) => {
  const [value, setValue] = useState(initialValue || (items.length > 0 ? items[0].value : ''));

  useEffect(() => {
    // If a controlled selectedValue is provided, sync it with local state
    if (selectedValue !== undefined && selectedValue !== value) {
      setValue(selectedValue);
    }
  }, [selectedValue]);

  const handleValueChange = (itemValue, itemIndex) => {
    setValue(itemValue);
    if (onValueChange) {
      onValueChange(itemValue, itemIndex);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        style={styles.picker}
        onValueChange={handleValueChange}
        mode="dropdown"  // For a native dropdown look on Android
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default ComboBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 60,
    width: '100%',
  },
});
