import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ComboBox = ({ 
  items, 
  selectedValue, 
  onValueChange, 
  initialValue,
  style 
}) => {
  const [value, setValue] = useState(initialValue || (items.length > 0 ? items[0].value : ''));

  useEffect(() => {
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
    <View style={[styles.container, style]}>
      <Picker
        selectedValue={value}
        style={[
          styles.picker,
          Platform.OS === 'android' && styles.androidPicker
        ]}
        dropdownIconColor="#000000"
        onValueChange={handleValueChange}
        mode="dropdown"
      >
        {items.map((item) => (
          <Picker.Item 
            key={item.value} 
            label={item.label} 
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 60,
    width: '100%', // Wider on iOS to account for dropdown
  },
  pickerItem: {
    fontSize: 16,
    height: 60,
  }
});

export default ComboBox;