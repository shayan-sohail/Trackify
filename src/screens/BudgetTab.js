// src/screens/BudgetTab.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { HighlightLabelButton, PlaneLabelButton, DangerLabelButton, OutlineLabelButton } from '../components/Buttons/LabelButton';
import { HighlightIconLabelButton, PlaneIconLabelButton, DangerIconLabelButton, OutlineIconLabelButton } from '../components/Buttons/IconLabelButton';
import PlaneTextInput from '../components/TextInput/PlaneTextInput';
import StaticIconTextInput from '../components/TextInput/StaticIconTextInput';
import ClickableIconTextInput from '../components/TextInput/ClickableIconTextInput';
import ToggleIconTextInput from '../components/TextInput/ToggleIconTextInput';
import Colors from '../constants/colors';

const BudgetTab = () => {

  const items = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Budget</Text>

      {<View>
        <HighlightLabelButton 
          label="Button"
          onPress={() => console.log('Save pressed')}
        />

        <HighlightLabelButton 
          label="Button"
          outline={true}
          outlineColor={Colors.dark}
          outlineWidth={3}
          onPress={() => console.log('Save pressed')}
        />
        
        <PlaneLabelButton 
          label="Button"
          outline={true}
          outlineColor={Colors.dark}
          onPress={() => console.log('Save pressed')}
        />
        
        <DangerLabelButton 
          label="Button"
          outline={true}
          outlineWidth={2}
          outlineColor={Colors.danger}
          onPress={() => console.log('Delete pressed')}
        />

        <OutlineLabelButton 
          label="Button"
          outlineColor={Colors.highlight}
          defaultTextColor={Colors.highlight}
          onClickedTextColor={Colors.highlightMedium}
          onPress={() => {}}
        />

        <HighlightIconLabelButton 
          label="Save"
          iconName="content-save"
          iconSize={20}
          onPress={() => {}}
        />

        <PlaneIconLabelButton 
          label="Filter"
          iconName="filter"
          outline={true}
          onPress={() => {}}
        />

        <DangerIconLabelButton 
          label="Delete"
          iconName="delete"
          // iconColor={Colors.dark} // Custom icon color
          onPress={() => {}}
        />

        <OutlineIconLabelButton 
          label="More"
          iconName="dots-horizontal"
          // iconColor={Colors.highlight}
          outlineColor={Colors.highlight}
          onPress={() => {}}
        />
      </View>}
    
    <PlaneTextInput
      placeholder="Enter text..."
      isNumeric = {true}
      onChangeText={(text) => console.log(text)}
    />

    <PlaneTextInput
      placeholder="Password"
      isSecureText={true}
      showOutline={true}
      outlineColor={Colors.dark}
      outlineWidth={1}
      onChangeText={(text) => console.log(text)}
    />

    <PlaneTextInput
      placeholder="Search..."
      backgroundColor={Colors.veryLight}
      textColor={Colors.dark}
      placeholderColor={Colors.medium}
      onChangeText={(text) => console.log(text)}
      style={{ marginTop: 8 }}
    />

<StaticIconTextInput
  placeholder="Search..."
  iconName="magnify"
  onChangeText={(text) => console.log(text)}
/>

<StaticIconTextInput
  placeholder="Email"
  iconName="email"
  position="right"
  showOutline={true}
  outlineColor={Colors.highlight}
  onChangeText={(text) => console.log(text)}
/>

<StaticIconTextInput
  placeholder="Password"
  iconName="lock"
  iconColor={Colors.highlight}
  backgroundColor={Colors.veryLight}
  textColor='green'
  placeholderColor='pink'
  isSecureText={true}
  onChangeText={(text) => console.log(text)}
/>

<ClickableIconTextInput
  placeholder="Search..."
  iconName="magnify"
  onIconClicked={() => console.log('Search icon clicked')}
  onChangeText={(text) => console.log('Search text:', text)}
/>

<ClickableIconTextInput
  placeholder="Password"
  iconName="eye"
  position="right"
  isSecureText={true}
  // onIconClicked={() => setShowPassword(!showPassword)}
  // onChangeText={(text) => setPassword(text)}
/>

<ClickableIconTextInput
  placeholder="Search items..."
  iconName="magnify"
  iconColor={Colors.highlight}
  backgroundColor={Colors.veryLight}
  showOutline={true}
  outlineColor={Colors.highlight}
  // onIconClicked={() => handleSearch()}
  // onChangeText={setSearchQuery}
/>

<ToggleIconTextInput
  placeholder="Password"
  icon1="eye-off"
  icon2="eye"
  position="right"
  isSecureText={true}
  initialToggleState={false}
  // onIconClicked={(isVisible) => setShowPassword(isVisible)}
  // onChangeText={(text) => setPassword(text)}
/>

<ToggleIconTextInput
  placeholder="Add to favoritessss..."
  icon1="heart-outline"
  icon2="heart"
  iconColor={Colors.danger}
  isNumeric={true}
  // initialToggleState={isFavorite}
  // onIconClicked={(isFav) => handleFavoriteToggle(isFav)}
  // onChangeText={setText}
/>

<ToggleIconTextInput
  placeholder="Sort items..."
  icon1="sort-ascending"
  icon2="sort-descending"
  iconColor={Colors.highlight}
  showOutline={true}
  // initialToggleState={isDescending}
  // onIconClicked={(isDesc) => handleSortDirectionChange(isDesc)}
  // onChangeText={setSearchQuery}
/>

    
    </ScrollView>
    
  );
};

export default BudgetTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    gap:10
  },
  text: {
    fontSize: 24,
  },
});
