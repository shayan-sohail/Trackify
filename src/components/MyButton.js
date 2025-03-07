// src/components/MyButton.js
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({
  onPress,
  style,
  onClickedBackgroundColor = '#FFCC00',
  onClickedTextColor = '#000',
  children,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.button,
        style,
        isPressed && { backgroundColor: onClickedBackgroundColor },
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {/* We render children directly, so if children includes an icon + text, they'll appear */}
      {React.Children.map(children, child => {
        if (!child) return null;
        // If the child is a Text, optionally you could override color if desired
        return child.type === Text && isPressed
          ? React.cloneElement(child, { style: [child.props.style, { color: onClickedTextColor }] })
          : child;
      })}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    flexDirection: 'row', // so icon + text can appear side by side
    alignItems: 'center',
  },
});
