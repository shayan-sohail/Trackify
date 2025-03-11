// src/components/ToggleIconButton.js
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ToggleIconButton = ({
  icon1,
  icon2,
  color1,
  color2,
  onPressed,
  size = 24,
  style,
}) => {
  const [toggled, setToggled] = useState(false);

  const handlePress = () => {
    const newToggled = !toggled;
    setToggled(newToggled);
    if (onPressed) {
      onPressed(newToggled);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Icon name={toggled ? icon2 : icon1} size={size} color={toggled ? color2 : color1} />
    </TouchableOpacity>
  );
};

export default ToggleIconButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});
