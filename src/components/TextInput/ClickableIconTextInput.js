import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import IconButton from '../Buttons/IconButton';
import Colors from '../../constants/colors';

const ClickableIconTextInput = ({
  placeholder,
  onChangeText,
  backgroundColor = Colors.light,
  placeholderColor = Colors.medium,
  textColor = Colors.dark,
  outlineColor = Colors.medium,
  outlineWidth = 1,
  showOutline = false,
  isSecureText = false,
  isNumeric = false,
  style,
  // Icon props
  iconName,
  iconSize = 24,
  iconColor = Colors.medium,
  position = 'left',
  onIconClicked,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleTextChange = (text) => {
    if (isNumeric) {
      if (/^[0-9.]*$/.test(text)) {
        // Check for multiple decimal points
        const decimalCount = (text.match(/\./g) || []).length;
        if (decimalCount <= 1) {
          setValue(text);
          if (onChangeText != null)
            onChangeText(text);
        }
      }
    } else {
      setValue(text);
      if (onChangeText != null)
        onChangeText(text);
    }
  };

  const containerStyles = [
    styles.container,
    {
      backgroundColor,
      flexDirection: position === 'left' ? 'row' : 'row-reverse',
    },
    showOutline && {
      borderWidth: outlineWidth,
      borderColor: outlineColor,
    },
    isFocused && showOutline && {
      borderColor: Colors.highlight,
    },
    style,
  ];

  return (
    <View style={containerStyles}>
      <IconButton 
        iconName={iconName}
        size={iconSize}
        color={iconColor}
        onPress={onIconClicked}
        style={styles.iconButton}
      />
      <TextInput
        style={[
          styles.input,
          { color: textColor },
          position === 'left' ? styles.inputLeft : styles.inputRight,
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={handleTextChange}
        secureTextEntry={isSecureText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        keyboardType={isNumeric ? 'numeric' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
  },
  iconButton: {
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  inputLeft: {
    paddingLeft: 0,
    paddingRight: 16,
  },
  inputRight: {
    paddingLeft: 16,
    paddingRight: 0,
  },
});

export default ClickableIconTextInput;