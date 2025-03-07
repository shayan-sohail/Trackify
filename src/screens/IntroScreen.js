// src/screens/IntroScreen.js
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

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
  
  const [isGetStartedPressed, setIsGetStartedPressed] = useState(false);

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
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.button, isGetStartedPressed && styles.buttonPressed]}
          onPressIn={() => setIsGetStartedPressed(true)}
          onPressOut={() => setIsGetStartedPressed(false)}
          onPress={() => goToSignUp()}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Got an account? </Text>
          <TouchableOpacity onPress={() => goToLogin()}
            activeOpacity={1}>
            <Text style={styles.registerNow}>Log in</Text>
          </TouchableOpacity>
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
  },
  bottomText: {
    fontSize: 14,
    color: Colors.medium,
  },
  registerNow: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '600',
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
    backgroundColor: Colors.highlight,
    paddingVertical: 12,
    width: '80%', // increased width for Get Started button
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonPressed: {
    backgroundColor: Colors.highlight,
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
  },
  signInText: {
    color: Colors.highlight,
    fontSize: 14,
  },
});
