import React, { useState, forwardRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, BackHandler, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Popover, { PopoverMode } from 'react-native-popover-view';

import Sidebar from '../../components/Sidebar';
// import IconButton from '../../components/Buttons/IconButton';
import BaseButton from '../../components/Buttons/BaseButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMultiPickerButtonWithModal from '../../components/Buttons/IconMultiPickerButtonWithModal';
import IconPickerButtonWithModal from '../../components/Buttons/IconPickerButtonWithModal';
import IconPickerButtonCycling from '../../components/Buttons/IconPickerButtonCycling';
import Colors from '../../constants/colors';

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

const IconButton = forwardRef(({ 
  iconName, 
  onPress, 
  size = 24,
  color = 'black', 
  style 
}, ref) => {
  return (
    <TouchableOpacity 
      ref={ref}
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
});

const ICON_SIZE = 25;

const LogsTab = () => {
  
  const navigation = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDates, setSelectedDates] = useState(0);
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  const [selectionCount, setSelectionCount] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectionBarVisible, setSelectionBarVisible] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const [selectedItems, setSelectedItems] = useState(new Set());
  
  const handlePress = (itemId) => {
    const selectedTransaction = TRANSACTIONS.find(item => item.id === itemId);
    
    if (selectionBarVisible) {
      const newSelectedItems = new Set(selectedItems);
      
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId);
        
        if (newSelectedItems.size === 0) {
          clearSelection();
        }
      } else {
        newSelectedItems.add(itemId);
      }
      
      setSelectedItems(newSelectedItems);
      setSelectionCount(newSelectedItems.size);
    } else {
      navigation.navigate("TransactionDetailsScreen", { 
        transaction: selectedTransaction 
      });
    }
  };

  React.useEffect(() => {
    const onBackPress = () => {
      if (selectionBarVisible) {
        clearSelection();
      }
      else {
        navigation.goBack();
      }
      return true;
    };
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );
  
    return () => backHandler.remove();
  }, [selectionCount]);

  const handleSelectAll = () => {
    const allIds = TRANSACTIONS.map(item => item.id);
    setSelectedItems(new Set(allIds));
    setSelectionCount(allIds.length);
    setShowPopover(false);
  };

  const handleShare = () => {
    console.log('Share selected items:', Array.from(selectedItems));
    setShowPopover(false);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
    setSelectionCount(0);
    setSelectionBarVisible(false);
  };
  const handleLongPress = (itemId) => {
    setSelectionBarVisible(true);
    setSelectedItems(new Set([itemId]));
    setSelectionCount(1);
  };

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
    <BaseButton
      style={[
        styles.transactionItem,
        selectedItems.has(item.id) && styles.selectedItem
      ]}
      onClickedBackgroundColor={selectedItems.has(item.id) ? Colors.light : 'transparent'}
      onPress={() => handlePress(item.id)}
      onLongPress={() => selectionBarVisible ? handlePress(item.id) : handleLongPress(item.id)}
      delayLongPress={500}
    >
      <View style={[styles.iconBox, { backgroundColor: selectedItems.has(item.id) ? Colors.highlight : item.color }]}>
        <Icon 
          name={selectedItems.has(item.id) ? 'check' : item.icon} 
          size={20} 
          color={selectedItems.has(item.id) ? Colors.veryLight : Colors.dark} 
        />
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
    </BaseButton>
  );

  return (
    <>
    {/* Always render Sidebar */}
    <Sidebar
        visible={drawerVisible}
        onClose={()=>setDrawerVisible(false)}
        drawerOffset={0}
      />
      
      {!selectionBarVisible && (<View style={styles.topBar}>
        <IconButton
          iconName="menu"
          size={ICON_SIZE}
          color= {Colors.dark}
          onPress={(state) => setDrawerVisible(true)}
          style={styles.iconButton}
          value={drawerVisible}
        />

        <View style={styles.rightIcons}>
          <IconButton
            iconName="magnify"
            size={ICON_SIZE}
            color= {Colors.dark}
            style={styles.iconButton}
            onPress={(state) => navigation.replace('SignUpScreen')}
          />
          <IconButton
            iconName="account-circle"
            size={ICON_SIZE}
            color= {Colors.dark}
            style={styles.iconButton}
            onPress={(state) => navigation.replace('LoginScreen')}
          />
        </View>
      </View>)}
      

      {selectionBarVisible && (<View style={styles.seletionBar}>
        <View style={styles.leftRowGroup}>
        <IconButton
          iconName="close"
          size={ICON_SIZE}
          color={Colors.dark}
          onPress={() => {
            clearSelection();
          }}
          style={styles.iconButton}
        />

          <Text style={styles.selectionTitle}>{selectionCount} Selected</Text>
        </View>
        
        <View style={styles.rightIcons}>
          <IconButton
            iconName="delete"
            size={ICON_SIZE}
            color={Colors.dark}
            style={styles.iconButton}
            onPress={() => console.log('Delete')}
          />
          <Popover
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            mode={PopoverMode.RN_MODAL}
            placement="bottom"
            animationConfig={{
              duration: 120,
              easing: Easing.out(Easing.ease)
            }}
            popoverStyle={styles.popoverWrapper}
            from={(
              <IconButton
                iconName="dots-vertical"
                size={ICON_SIZE}
                color={Colors.dark}
                style={styles.iconButton}
                onPress={() => setShowPopover(true)}
              />
            )}
          >
  <View style={styles.popoverContainer}>
    <TouchableOpacity 
      style={styles.popoverItem}
      onPress={handleSelectAll}
      activeOpacity={0.7}
    >
      <Text style={styles.popoverText}>Select All</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.popoverItem}
      onPress={handleShare}
      activeOpacity={0.7}
    >
      <Text style={styles.popoverText}>Export</Text>
    </TouchableOpacity>
  </View>
</Popover>
        </View>
      </View>)}






    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>Transactions</Text>
        {!selectionBarVisible && (<View style={styles.filtersContainer}>
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
            style={styles.filterButton}
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
        </View>)}
      </View>

      <FlatList
        data={TRANSACTIONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    color: Colors.medium,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    paddingTop: 70,
  },
  date: {
    fontSize: 12,
    color: Colors.medium,
  },
  expense: {
    color: 'red',
  },
  filterButton: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  filtersContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
    paddingHorizontal: 5,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  income: {
    color: 'green',
  },
  leftRowGroup: {
    flexDirection: 'row',
  },
  listContainer: {
    paddingBottom: 20,
  },
  midContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  popoverWrapper: {
    backgroundColor: Colors.light,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
  },
  popoverContainer: {
    padding: 0,
    minWidth: 150,
  },
  popoverItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  popoverText: {
    fontSize: 16,
    color: Colors.dark,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  seletionBar: {
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    zIndex: 1,
  },
  selectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.dark,
    marginLeft: 10,
    padding: 5,
  },
  selectedItem: {
    backgroundColor: Colors.light,
  },
  topBar: {
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    zIndex: 1,
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    marginBottom: 3,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: Colors.veryLight,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    backgroundColor: Colors.veryLight,
  },
});

export default LogsTab;