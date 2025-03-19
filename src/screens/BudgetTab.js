// src/screens/BudgetTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HighlightLabelButton, PlaneLabelButton, DangerLabelButton, OutlineLabelButton } from '../components/Buttons/LabelButton';
import { HighlightIconLabelButton, PlaneIconLabelButton, DangerIconLabelButton, OutlineIconLabelButton } from '../components/Buttons/IconLabelButton';
import Colors from '../constants/colors';

const BudgetTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Budget</Text>

      {/* <View>
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
      </View> */}
    </View>
    
  );
};

export default BudgetTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
