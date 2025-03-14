// src/components/BiStateModalBox.js
import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import MyButton from './MyButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';

const BiStateModalBox = ({
  visible,
  title,
  subtitle,
  leftButtonText,
  rightButtonText,
  onLeftPress,
  onRightPress,
  onRequestClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          {/* Cross Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onLeftPress}>
            <Icon name="close" size={24} color={Colors.dark} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>

          <View style={styles.buttonRow}>
            <MyButton
              style={styles.leftButton}
              onPress={onLeftPress}
              onClickedBackgroundColor={Colors.mediumDark}
            >
              <Text style={styles.buttonText}>{leftButtonText}</Text>
            </MyButton>

            <MyButton style={styles.rightButton} onPress={onRightPress}>
              <Text style={styles.buttonText}>{rightButtonText}</Text>
            </MyButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BiStateModalBox;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: Colors.veryLight,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 15, // leave room for close button
  },
  subtitle: {
    fontSize: 14,
    color: Colors.mediumDark,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftButton: {
    backgroundColor: Colors.medium,
    width: '35%',
  },
  rightButton: {
    backgroundColor: Colors.highlight,
    width: '35%',
  },
  buttonText: {
    color: Colors.veryLight,
    fontSize: 16,
  },
});
