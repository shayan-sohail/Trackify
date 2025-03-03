// src/components/EyeTextInput.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

const EyeTextInput = ({
  placeholder,
  containerStyle,
  inputStyle,
  secureTextEntry = false,
  onChangeText,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={isSecure}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.eyeContainer}
        onPress={() => setIsSecure(!isSecure)}
      >
        {/* Replace with a proper eye icon if you like */}
        <Text style={styles.eyeIcon}>{isSecure ? '👁️' : '🙈'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EyeTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 15,
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
