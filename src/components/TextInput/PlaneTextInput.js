import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const PlaneTextInput = ({
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

  const inputStyles = [
    styles.input,
    {
      backgroundColor,
      color: textColor,
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
    <TextInput
      style={inputStyles}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      onChangeText={handleTextChange}
      value={value}
      secureTextEntry={isSecureText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      keyboardType={isNumeric ? 'numeric' : 'default'}
    />
  );
};


const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 60,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
});

export default PlaneTextInput;