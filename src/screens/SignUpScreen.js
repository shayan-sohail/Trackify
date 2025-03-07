// src/screens/SignUpScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import EyeTextInput from '../components/EyeTextInput'; // for password fields
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/colors';

const { width } = Dimensions.get('window');

const SignUpScreen = () => {

    const navigation = useNavigation();

    const goToLogin = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    };

  return (
    <View style={styles.container}>
      {/* Centered Logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Hello! Register to get started</Text>

      {/* Username Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor={Colors.medium}
        />
      </View>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={Colors.medium}
        />
      </View>

      {/* Password Field (with eye icon) */}
      <EyeTextInput
        placeholder="Password"
        secureTextEntry={true}
        containerStyle={{ marginBottom: 15 }}
      />

      {/* Confirm Password Field (with eye icon) */}
      <EyeTextInput
        placeholder="Confirm password"
        secureTextEntry={true}
        containerStyle={{ marginBottom: 15 }}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Or Register with */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or Register with</Text>
        <View style={styles.orLine} />
      </View>

      {/* Social buttons row */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Bottom row: Already have an account? */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => goToLogin()}
        >
          <Text style={styles.registerNow}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center', // Center logo horizontally
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.light,
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    padding: 12,
    color: Colors.dark,
  },
  loginButton: {
    backgroundColor: Colors.highlight,
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  loginButtonText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light,
  },
  orText: {
    marginHorizontal: 8,
    color: Colors.medium,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 30,
  },
  socialButton: {
    width: 90,
    height: 55,
    borderRadius: 8,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    fontSize: 20,
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
});
