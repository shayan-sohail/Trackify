// src/components/BiStateModalBox.js
import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import {HighlightLabelButton, PlaneLabelButton} from '../components/Buttons/LabelButton';
import IconButton from '../components/Buttons/IconButton';

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
          <IconButton 
            iconName='close'
            onPress={onRequestClose}
            size={24}
            style={styles.closeButton}
            color={Colors.dark}/>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>

          <View style={styles.buttonRow}>
            <PlaneLabelButton
              style={styles.leftButton}
              onPress={onLeftPress}
              defaultTextColor={Colors.light}
              onClickedBackgroundColor={Colors.mediumDark}
              label={leftButtonText}/>

            <HighlightLabelButton style={styles.rightButton} 
              onPress={onRightPress} 
              label={rightButtonText}/>

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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
  leftButton: {
    backgroundColor: Colors.medium,
    width: '35%',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: Colors.veryLight,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    position: 'relative',
  },
  rightButton: {
    backgroundColor: Colors.highlight,
    width: '35%',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.mediumDark,
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 15, // leave room for close button
  },
});
