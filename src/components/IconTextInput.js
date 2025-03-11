// src/components/IconTextInput.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import Colors from '../constants/colors';
import ToggleIconButton from './ToggleIconButton';

//It is separate component, because we can reuse it for info fields
const IconTextInput = ({
  placeholder,
  containerStyle,
  inputStyle,
  secureTextEntry = false,
  onChangeText,
  isSecureInput = false,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor= {Colors.medium}
        secureTextEntry={isSecureInput && isSecure}
        onChangeText={onChangeText}
      />
      <ToggleIconButton
        icon1="eye"
        icon2="eye-off"
        color1= {Colors.medium}
        color2={Colors.medium}
        onPressed={(state) => {if (isSecureInput) setIsSecure(!isSecure)}}
        />
    </View>
  );
};

export default IconTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 8,
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 12,
  },
  eyeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
  },
  eyeIcon: {
    fontSize: 16,
  },
});
