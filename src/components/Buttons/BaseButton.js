import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const BaseButton = ({
  onPress,
  style,
  onClickedBackgroundColor = Colors.highlightMedium,
  onClickedTextColor = Colors.veryLight,
  onLongPress,
  delayLongPress = 500,
  children,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLongPressed, setIsLongPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    if (!isLongPressed) {
      setIsPressed(false);
    }
    setIsLongPressed(false);
  };

  const handleLongPress = () => {
    setIsLongPressed(true);
    if (onLongPress) {
      onLongPress();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.button,
        style,
        (isPressed || isLongPressed) && { backgroundColor: onClickedBackgroundColor },
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
      delayLongPress={delayLongPress}
    >
      {React.Children.map(children, child => {
        if (!child) return null;
        return child.type === Text && (isPressed || isLongPressed)
          ? React.cloneElement(child, { style: [child.props.style, { color: onClickedTextColor }] })
          : child;
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.highlight,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BaseButton;