import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const BaseLabelButton = ({
    onPress,
    style,
    defaultBackgroundColor,
    onClickedBackgroundColor,
    defaultTextColor,
    onClickedTextColor,
    label,
    labelStyle,
    outline = false,
    outlineWidth = 1,
    outlineColor,
  }) => {
    const [isPressed, setIsPressed] = useState(false);
  
    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };
  
    const buttonStyles = [
      styles.button,
      { backgroundColor: defaultBackgroundColor },
      outline && {
        borderWidth: outlineWidth,
        borderColor: outlineColor || defaultBackgroundColor,
      },
      style,
      isPressed && { backgroundColor: onClickedBackgroundColor },
    ];
  
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={buttonStyles}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={[
          styles.label,
          { color: defaultTextColor },
          labelStyle,
          isPressed && { color: onClickedTextColor }
        ]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  export const OutlineLabelButton = ({ 
    label, 
    style, 
    labelStyle, 
    outlineWidth = 1,
    outlineColor = Colors.dark,
    ...props 
  }) => (
    <BaseLabelButton
      label={label}
      style={style}
      labelStyle={labelStyle}
      outline={true}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      defaultBackgroundColor="transparent"
      onClickedBackgroundColor="transparent"
      defaultTextColor={Colors.dark}
      onClickedTextColor={Colors.medium}
      {...props}
    />
  );

export const HighlightLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  ...props 
}) => (
  <BaseLabelButton
    label={label}
    style={style}
    labelStyle={labelStyle}
    outline={outline}
    outlineWidth={outlineWidth}
    outlineColor={outlineColor}
    defaultBackgroundColor={Colors.highlight}
    onClickedBackgroundColor={Colors.highlightMedium}
    defaultTextColor={Colors.light}
    onClickedTextColor={Colors.veryLight}
    {...props}
  />
);

export const PlaneLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  ...props 
}) => (
  <BaseLabelButton
    label={label}
    style={style}
    labelStyle={labelStyle}
    outline={outline}
    outlineWidth={outlineWidth}
    outlineColor={outlineColor}
    defaultBackgroundColor={Colors.mediumLight}
    onClickedBackgroundColor={Colors.medium}
    defaultTextColor={Colors.dark}
    onClickedTextColor={Colors.dark}
    {...props}
  />
);

export const PlaneTextButton = ({ 
  label, 
  style,
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  ...props 
}) => (
  <BaseLabelButton
    label={label}
    style={[styles.planeTextButton, style]}
    labelStyle={[styles.planeTextlabel, labelStyle]}
    outline={outline}
    outlineWidth={outlineWidth}
    outlineColor={outlineColor}
    defaultBackgroundColor="transparent"
    onClickedBackgroundColor='transparent'
    defaultTextColor={Colors.highlight}
    onClickedTextColor={Colors.highlightMedium}
    {...props}
  />
);

export const DangerLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  ...props 
}) => (
  <BaseLabelButton
    label={label}
    style={style}
    labelStyle={labelStyle}
    outline={outline}
    outlineWidth={outlineWidth}
    outlineColor={outlineColor}
    defaultBackgroundColor={Colors.danger}
    onClickedBackgroundColor={Colors.dangerMedium}
    defaultTextColor={Colors.light}
    onClickedTextColor={Colors.veryLight}
    {...props}
  />
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  planeTextButton: {
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planeTextlabel: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default BaseLabelButton;