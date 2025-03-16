// src/components/IconButtonToggle.js
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButtonToggle = ({
  icon1,
  icon2 = icon1,
  color1,
  color2 = color1,
  onPressed,
  size = 24,
  style,
  initialValue = false,
  value, // Controlled value prop
}) => {
  // Internal state used when value prop is not provided
  const [internalToggled, setInternalToggled] = useState(initialValue);
  
  // Use the controlled value if provided; otherwise, use internal state
  const toggled = value !== undefined ? value : internalToggled;

  const handlePress = () => {
    const newToggled = !toggled;
    if (value === undefined) {
      setInternalToggled(newToggled);
    }
    if (onPressed) {
      onPressed(newToggled);
    }
  };

  useEffect(() => {
    if (value === undefined) {
      setInternalToggled(initialValue);
    }
  }, [initialValue, value]);

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      onClickedBackgroundColor="transparent"
    >
      <Icon name={toggled ? icon2 : icon1} size={size} color={toggled ? color2 : color1} />
    </TouchableOpacity>
  );
};

export default IconButtonToggle;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
});
