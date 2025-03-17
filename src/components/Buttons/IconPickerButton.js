import React, { useState } from 'react';
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

const IconPickerButton = ({ 
  items, 
  selectedIndex = 0,
  chevronType = 'single', // 'single', 'double', 'none'
  onSelect,
  showLabel = true,
  style,
  size = 24
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const getChevronIcon = () => {
    switch(chevronType) {
      case 'single': return 'chevron-down';
      case 'double': return 'unfold-more-horizontal';
      default: return null;
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity 
      style={[
        styles.menuItem,
        selectedIndex === index && styles.selectedItem
      ]}
      onPress={() => {
        onSelect(index);
        setModalVisible(false);
      }}
    >
      <Icon name={item.icon} size={size} color={Colors.dark} />
      <Text style={styles.menuItemText}>{item.label}</Text>
      {selectedIndex === index && (
        <Icon 
          name="check" 
          size={size} 
          color={Colors.highlight} 
          style={styles.checkIcon} 
        />
      )}
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity 
        style={[styles.button, style]} 
        onPress={() => setModalVisible(true)}
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

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.menuContainer}>
                <FlatList
                  data={items}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.menuList}
                />
              </View>
            </TouchableWithoutFeedback>
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
        paddingVertical:0,
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
  },
  selectedItem: {
    backgroundColor: Colors.light,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: Colors.dark,
    flex: 1,
  },
  checkIcon: {
    marginLeft: 8,
  },
});

export default IconPickerButton;