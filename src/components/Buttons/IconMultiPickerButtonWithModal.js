import React, { useState, useEffect, useMemo } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Modal, 
  StyleSheet, 
  Text, 
  FlatList,
  TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/colors';

const IconMultiPickerButtonWithModal = ({ 
  items,
  selectedItems = [],
  chevronType = 'single',
  onSelect,
  showLabel = true,
  defaultLabel,
  defaultIcon,
  style,
  size = 24,
  showSelectionControls = true, // New prop
  sortItems = false, // New prop
}) => {
const [modalVisible, setModalVisible] = useState(false);
const [localSelected, setLocalSelected] = useState(selectedItems);
const [sortedItems, setSortedItems] = useState(items);

  useEffect(() => {
    setLocalSelected(selectedItems);
  }, [selectedItems]);
  
  useEffect(() => {
    if (sortItems) {
      const sorted = [...items].sort((a, b) => a.label.localeCompare(b.label));
      setSortedItems(sorted);
    } else {
      setSortedItems(items);
    }
  }, [items, sortItems]);

  const getChevronIcon = () => {
    switch(chevronType) {
      case 'single': return 'chevron-down';
      case 'double': return 'unfold-more-horizontal';
      default: return null;
    }
  };

  const isAllSelected = () => {
    return localSelected.length === sortedItems.length && sortedItems.length > 0;
  };

  const isNoneSelected = () => {
    return localSelected.length === 0;
  };

  const handleSelectAll = () => {
    const allIndices = sortedItems.map((_, index) => index);
    setLocalSelected(allIndices);
    onSelect(allIndices);
  };

  const handleDeselectAll = () => {
    setLocalSelected([]);
    onSelect([]);
  };

  const toggleSelection = (index) => {
    const newSelection = [...localSelected];
    const existingIndex = newSelection.indexOf(index);
    
    if (existingIndex >= 0) {
      newSelection.splice(existingIndex, 1);
    } else {
      newSelection.push(index);
    }
    
    setLocalSelected(newSelection);
    onSelect(newSelection); // Return indices instead of mapped items
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.menuItem}
      onPress={() => toggleSelection(index)}
    >
      <Icon 
        name={localSelected.includes(index) ? "checkbox-marked" : "checkbox-blank-outline"}
        size={size}
        color={localSelected.includes(index) ? Colors.highlight : Colors.medium}
      />
      <Icon 
        name={item.icon} 
        size={size} 
        color={Colors.dark}
        style={styles.itemIcon} 
      />
      <Text style={styles.menuItemText}>
        {item.label}
      </Text>
      {item.icon2 && (
        <Icon 
          name={item.icon2} 
          size={size} 
          color={Colors.dark}
        />
      )}
    </TouchableOpacity>
  );

  const renderSelectedPreview = () => {
    // If default label is provided, always use it
    if (defaultLabel) {
      return defaultLabel;
    }

    if (localSelected.length === 0) {
      return "Select items";
    }
    if (localSelected.length === 1) {
      return items[localSelected[0]].label;
    }
    return `${localSelected.length} items selected`;
  };

  return (
    <>
      <TouchableOpacity 
        style={[styles.button, style]} 
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.buttonContent}>
          {defaultIcon ? (
            // Show default icon if provided
            <Icon 
              name={defaultIcon}
              size={size}
              color={Colors.dark}
            />
          ) : (
            // Otherwise show selected item icon
            localSelected.length === 1 && (
              <Icon 
                name={items[localSelected[0]]?.icon}
                size={size}
                color={Colors.dark}
              />
            )
          )}
          {showLabel && (
            <Text style={styles.buttonText}>
              {renderSelectedPreview()}
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
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.menuContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Items</Text>
                {showSelectionControls && (
                  <View style={styles.headerControls}>
                    <TouchableOpacity 
                      onPress={handleSelectAll}
                      style={[
                        styles.headerButton,
                        isAllSelected() && styles.headerButtonActive
                      ]}
                    >
                      <Icon 
                        name="checkbox-multiple-marked" 
                        size={size} 
                        color={isAllSelected() ? Colors.highlight : Colors.medium}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={handleDeselectAll}
                      style={[
                        styles.headerButton,
                        isNoneSelected() && styles.headerButtonActive
                      ]}
                    >
                      <Icon 
                        name="checkbox-multiple-blank-outline" 
                        size={size} 
                        color={isNoneSelected() ? Colors.highlight : Colors.medium}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <FlatList
                data={sortedItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.menuList}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
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
  checkIcon: {
    width: 24,
    marginRight: 12,
  },
  chevron: {
    marginLeft: 4,
  },
  headerControls: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    padding: 4,
    borderRadius: 4,
  },
  headerButtonActive: {
    backgroundColor: Colors.light,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '80%',
    maxHeight: '70%',
    backgroundColor: Colors.veryLight,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  menuList: {
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  itemIcon: {
    marginHorizontal: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.dark,
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark,
  },
});

export default IconMultiPickerButtonWithModal;