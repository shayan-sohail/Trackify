// src/screens/LogsTab.js
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IconButton from '../components/Buttons/IconButton';
import IconButtonToggle from '../components/Buttons/IconButtonToggle';
import IconPickerButton from '../components/Buttons/IconPickerButton';
import IconMultiPickerButton from '../components/Buttons/IconMultiPickerButton';

const LogsTab = () => {

  const iconOptions = [
    { icon: 'food', label: 'Food' },
    { icon: 'car', label: 'Transport' },
    { icon: 'shopping', label: 'Shopping' },
    { icon: 'movie', label: 'Entertainment' },
  ];
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logs</Text>
      <IconButton 
        iconName="delete" 
        onPress={() => console.log('Delete logs')} 
        size={24}
        color='green'
        style={{ marginLeft: 10 }} 
      />

      <IconButtonToggle
        icon1="eye-off"
        icon2="eye"
        color1="black"
        color2="black"
        onPressed={(toggled) => console.log(`Toggle logs visibility: ${toggled}`)}
        size={24}
        style={{ marginLeft: 10 }}
      />

    <IconPickerButton
      items={iconOptions}
      selectedIndex={selectedIconIndex}
      onSelect={setSelectedIconIndex}
      chevronType="none"
      showLabel
      size={24}
    />

  <IconMultiPickerButton
    items={[
      { icon: 'food', label: 'Food' },
      { icon: 'car', label: 'Transport' },
      { icon: 'shopping', label: 'Shopping' }
    ]}
    selectedItems={selectedItems}
    onSelect={(items) => {
      setSelectedItems(items);
      console.log('Selected items:', items);
    }}
    showLabel={true}
    chevronType="single"
  />

<IconMultiPickerButton
    items={[
      { icon: 'food', label: 'Food' },
      { icon: 'car', label: 'Transport' },
      { icon: 'shopping', label: 'Shopping' }
    ]}
    selectedItems={selectedItems}
    onSelect={(items) => {
      setSelectedItems(items);
      console.log('Selected items:', items);
    }}
    defaultLabel="Filter"
    defaultIcon="filter"
    showLabel={false}
    chevronType="single"
  />

    </View>
  );
};

export default LogsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
