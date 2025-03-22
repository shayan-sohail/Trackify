// src/screens/IntroScreen.js
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/colors';
import {HighlightLabelButton, PlaneTextButton} from '../components/Buttons/LabelButton';

const { width } = Dimensions.get('window');

// Slides data for the swipable content
const slidesData = [
  {
    id: '1',
    title: 'Fast Delivery',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: require('../assets/ss_1.jpg'),
  },
  {
    id: '2',
    title: 'Exciting Offers',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: require('../assets/ss_1.jpg'),
  },
  {
    id: '3',
    title: 'Secure Payment',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: require('../assets/ss_1.jpg'),
  },
];

const IntroScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  const goToSignUp = () => {
    navigation.replace('SignUpScreen');
  };
  
  // Config for FlatList viewability
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  // Render each slide with image and text
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.swipeArea}>
        <FlatList
          data={slidesData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        {/* Navigation dots */}
        <View style={styles.dotContainer}>
          {slidesData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Fixed bottom area with buttons */}
      <View style={styles.buttonArea}>
        <HighlightLabelButton
          style={styles.button}
          onPress={() => goToSignUp()}
          label='Get Started'/>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Got an account? </Text>
          <PlaneTextButton onPress={() => goToLogin()} 
            label='Log in'/>
        </View>
      </View>

    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomText: {
    fontSize: 14,
    color: Colors.medium,
  },
  registerNowButton: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '600',
    paddingHorizontal:0,
  },
  swipeArea: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350, // increased size
    height: 350,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 30, // push hero content slightly lower
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 8,
    color: Colors.dark,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 30,
    color: Colors.medium,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Colors.highlight
  },
  inactiveDot: {
    backgroundColor: Colors.mediumLight
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '80%', // increased width for Get Started button
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
  },
});
