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
          style={styles.button}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signInText}>
            Got an account? <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 30,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#00aced',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#00aced',
    paddingVertical: 12,
    width: '80%', // increased width for Get Started button
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signInText: {
    color: '#333',
    fontSize: 14,
  },
});
