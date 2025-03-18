import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Text 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/colors';

const IconPickerButtonCycling = ({ 
  items, 
  selectedIndex = 0,
  chevronType = 'single',
  onSelect,
  showLabel = true,
  style,
  size = 24
}) => {
  const getChevronIcon = () => {
    switch(chevronType) {
      case 'single': return 'chevron-down';
      case 'double': return 'unfold-more-horizontal';
      default: return null;
    }
  };

  const handlePress = () => {
    // Cycle to next item, or back to first if at end
    const nextIndex = (selectedIndex + 1) % items.length;
    onSelect(nextIndex);
  };

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={handlePress}
    >
      <View style={styles.buttonContent}>
        <Icon 
          name={items[selectedIndex]?.icon} 
          size={size} 
          color={Colors.dark} 
        />
        {showLabel && (
          <Text style={styles.buttonText}>
            {items[selectedIndex]?.label}
          </Text>
        )}
      </View>
      {chevronType !== 'none' && (
        <Icon 
          name={getChevronIcon()} 
          size={size * 0.75} 
          color={Colors.dark}
          style={styles.chevron} 
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingVertical: 0,
    backgroundColor: Colors.light,
    borderRadius: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.dark,
  },
  chevron: {
    marginLeft: 4,
  },
});

export default IconPickerButtonCycling;