// src/screens/SignUpScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import EyeTextInput from '../components/EyeTextInput'; // for password fields
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/colors';
import MyButton from '../components/MyButton';

const { width } = Dimensions.get('window');

const SignUpScreen = () => {

    const navigation = useNavigation();

    const goToLogin = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    };

    const goToOTPValidation = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'OTPVerificationScreen' }],
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
      <MyButton style={styles.registerButton} onPress={() => goToOTPValidation()}>
        <Text style={styles.loginButtonText}>Register</Text>
      </MyButton>

      {/* Or Register with */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}> or </Text>
        <View style={styles.orLine} />
      </View>

      {/* Social buttons row */}
      <MyButton
        style={styles.googleLoginButton}
        onPress={() => console.log('Login with Google pressed')}
        onClickedBackgroundColor={Colors.mediumLight}
        onClickedTextColor={Colors.veryDark}
      >
        <Icon name="google" size={24} color="#DB4437" style={styles.googleIcon} />
        <Text style={styles.googleText}>Login with Google</Text>
      </MyButton>

      {/* Bottom row: Already have an account? */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <MyButton
          onPress={() => goToLogin()}
          style={styles.registerNowButton}
          onClickedBackgroundColor="transparent"
          onClickedTextColor={Colors.highlightMedium}
        >
          <Text style={styles.registerNow}>Login Now</Text>
        </MyButton>
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
  registerButton: {
    width: '100%',
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
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',         // full width button
    height: 55,
    borderRadius: 8,
    backgroundColor: Colors.light,
    marginVertical: 10,
  },
  googleIcon: {
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: Colors.dark,
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
  registerNowButton: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
  },
});
