import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/colors';

const BaseIconLabelButton = ({
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
    iconName,
    iconSize = 24,
    iconColor,
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

    const currentTextColor = isPressed ? onClickedTextColor : defaultTextColor;
    const currentIconColor = iconColor || currentTextColor;
  
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={buttonStyles}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={styles.content}>
          <Icon 
            name={iconName} 
            size={iconSize} 
            color={currentIconColor} 
            style={styles.icon}
          />
          <Text style={[
            styles.label,
            { color: currentTextColor },
            labelStyle,
          ]}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
};

export const OutlineIconLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outlineWidth = 1,
  outlineColor = Colors.dark,
  iconName,
  iconSize,
  iconColor = Colors.dark,
  ...props 
}) => (
  <BaseIconLabelButton
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
    iconName={iconName}
    iconSize={iconSize}
    iconColor={iconColor}
    {...props}
  />
);

export const HighlightIconLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  iconName,
  iconSize,
  iconColor = Colors.light,
  ...props 
}) => (
  <BaseIconLabelButton
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
    iconName={iconName}
    iconSize={iconSize}
    iconColor={iconColor}
    {...props}
  />
);

export const PlaneIconLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  iconName,
  iconSize,
  iconColor = Colors.dark,
  ...props 
}) => (
  <BaseIconLabelButton
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
    iconName={iconName}
    iconSize={iconSize}
    iconColor={iconColor}
    {...props}
  />
);

export const DangerIconLabelButton = ({ 
  label, 
  style, 
  labelStyle, 
  outline,
  outlineWidth,
  outlineColor,
  iconName,
  iconSize,
  iconColor = Colors.light,
  ...props 
}) => (
  <BaseIconLabelButton
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
    iconName={iconName}
    iconSize={iconSize}
    iconColor={iconColor}
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BaseIconLabelButton;