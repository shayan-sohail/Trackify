import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import PlaneTextPicker from '../components/Picker/PlaneTextPicker';
import DatePicker from '../components/Picker/DatePicker';
import Colors from '../constants/colors';
import BiStateModalBox from '../components/BiStateModalBox';
import {HighlightLabelButton, PlaneLabelButton} from '../components/Buttons/LabelButton';
import PlaneTextInput from '../components/TextInput/PlaneTextInput';
import IconButton from '../components/Buttons/IconButton';


const TransactionDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const transaction = route.params?.transaction;
  const transactionType = route.params?.transactionType;

  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [showMoreFields, setShowMoreFields] = useState(true);

  useEffect(() => {
    if (transaction) {
      setCategory(transaction.category || '');
      setAmount(transaction.amount?.replace(/[+-]/, '') || '');
      setName(transaction.title || '');
      setDate(new Date(transaction.date) || new Date());
    }
  }, [transaction]);

  const handleFieldChange = (field, value) => {
    if (transaction) {
      let isChanged = false;
      switch (field) {
        case 'category':
          setCategory(value);
          isChanged = value !== transaction.category;
          break;
        case 'amount':
          setAmount(value);
          isChanged = value !== transaction.amount?.replace(/[+-]/, '');
          break;
        case 'name':
          setName(value);
          isChanged = value !== transaction.title;
          break;
        case 'date':
          setDate(value);
          isChanged = value.getTime() !== new Date(transaction.date).getTime();
          break;
      }
      setIsModified(isChanged);
    } else {
      // For new transactions, just update the field
      switch (field) {
        case 'category': setCategory(value); break;
        case 'amount': setAmount(value); break;
        case 'name': setName(value); break;
        case 'date': setDate(value); break;
      }
    }
  };

  const handleDelete = () => {
    console.log('Delete transaction:', transaction);
    setShowModal(true);
  };

  const categories = [
    { label: 'Food', value: 'food' },
    { label: 'Transport', value: 'transport' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Shopping', value: 'shopping' },
  ];

  const handleAdd = () => {
    const transactionData = {
      category,
      amount: transaction?.amount?.startsWith('+') ? `+${amount}` : `-${amount}`,
      name,
      date
    };
    console.log(transactionData);
    navigation.goBack();
  };

  const getScreenTitle = () => {
    if (transactionType) return transactionType == 'income' ? 'Add Income' : 'Add Expense';
    const baseTitle = transaction.amount?.startsWith('+') ? 'Income Details' : 'Expense Details';
    return isModified ? `*${baseTitle}` : baseTitle;
  };

  const handleShowMoreFields = () => {
    setShowMoreFields(true);
  };

  const onLeftPress = () => {
    setShowModal(false);
  };

  const onRightPress = () => {
    console.log('Confirmed expense');
    setShowModal(false);
    navigation.goBack();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric'
    });
  };

  const handleAttachment = () => {
    console.log('Add attachment pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.screenTitle}>{getScreenTitle()}</Text>
        {transaction && (
          <IconButton
            iconName='delete' 
            onPress={handleDelete}
            color={Colors.dark}
            style={styles.deleteButton}  
          />
        )}
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.form}>
        <Text style={styles.label}>Category</Text>
        <PlaneTextPicker
          items={categories}
          selectedValue={category}
          onValueChange={(value) => handleFieldChange('category', value)}
        />

        <Text style={styles.label}>Amount</Text>
        <View style={styles.inputContainer}>
          <PlaneTextInput
            style={styles.textInput}
            placeholder="Enter amount"
            placeholderTextColor={Colors.medium}
            value={amount}
            onChangeText={(value) => handleFieldChange('amount', value)}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity 
          style={styles.inputContainer}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>
            {formatDate(date)}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Name</Text>
        <View style={styles.inputContainer}>
          <PlaneTextInput
            style={styles.textInput}
            placeholder="Enter transaction name"
            placeholderTextColor={Colors.medium}
            value={name}
            onChangeText={(value) => handleFieldChange('name', value)}
          />
        </View>
        
        {/* ... Name field remains the same ... */}

        {!showMoreFields && (
          <HighlightLabelButton
            style={styles.moreFieldsButton}
            onPress={handleShowMoreFields}
            onClickedBackgroundColor="transparent"
            onClickedTextColor={Colors.highlightMedium}
            label='More fields'
            labelStyle={styles.moreFieldsText}
          />
        )}
        
        {showMoreFields && (
          <>
            <Text style={styles.label}>Notes</Text>
            <View style={[styles.inputContainer, styles.notesContainer]}>
              <PlaneTextInput
                style={[styles.textInput, styles.notesInput]}
                placeholder="Enter notes"
                placeholderTextColor={Colors.medium}
                value={notes}
                onChangeText={setNotes}
                multiline={true}
                numberOfLines={4}
              />
            </View>

            <Text style={styles.label}>Attachment (Max 5)</Text>
            <PlaneLabelButton 
              style={styles.attachmentButton}
              onPress={handleAttachment}
              label='Add Attachment'
              labelStyle={styles.attachmentButtonText}
            />
            <Text>Max attachment 2MB</Text>
          </>
        )}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <PlaneLabelButton 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          label='Cancel'
          labelStyle={styles.buttonText}
        />
        <HighlightLabelButton 
          style={styles.addButton}
          onPress={handleAdd}
          label={transaction ? 'Update' : 'Add'}
          labelStyle={styles.buttonText}
        />
      </View>

      <DatePicker
        visible={showDatePicker}
        initialDate={date}
        onDateChange={(newDate) => {
          handleFieldChange('date', newDate);
          setShowDatePicker(false);
        }}
        onRequestClose={() => setShowDatePicker(false)}
      />

      {/* The modal box itself */}
      <BiStateModalBox
        visible={showModal}
        title="Add Expense"
        subtitle="Do you want to add a new expense?"
        leftButtonText="Cancel"
        rightButtonText="Confirm"
        onLeftPress={onLeftPress}
        onRightPress={onRightPress}
        onRequestClose={() => setShowModal(false)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    flex: 1,
    height: 60,
  },
  attachmentButton: {
    backgroundColor: Colors.light,
    height: 60,
    marginVertical: 5,
    justifyContent: 'center',
  },
  attachmentButtonText: {
    color: Colors.dark,
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.veryLight,
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.medium,
    height: 60,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    padding: 20
  },
  dateText: {
    fontSize: 16,
    color: Colors.dark,
    paddingHorizontal: 12,
    textAlign: 'left',
  },
  deleteButton: {
  },
  form: {
    gap: 8,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.light,
    borderRadius: 8,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark,
    marginTop: 8,
  },
  moreFieldsButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    marginTop: 10,
  },
  moreFieldsText: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '600',
  },
  notesContainer: {
    height: 200,
  },
  notesInput: {
    height: '100%',
    textAlignVertical: 'top',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    padding: 12,
    color: Colors.dark,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    backgroundColor: Colors.veryLight,
  },
});

export default TransactionDetailsScreen;