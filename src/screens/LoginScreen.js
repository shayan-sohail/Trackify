// src/screens/LoginScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import EyeTextInput from '../components/EyeTextInput'; // For password
import { TextInput } from 'react-native-gesture-handler'; // or from 'react-native' if you prefer

const { width } = Dimensions.get('window');

const LoginScreen = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Centered Logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>

      {/* Email Field (normal text input) */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          placeholderTextColor="#999"
        />
      </View>

      {/* Password Field (with eye icon) */}
      <EyeTextInput
        placeholder="Enter your password"
        secureTextEntry={true}
        containerStyle={{ marginBottom: 5 }} // Slight gap before the forgot password link
      />

      {/* Forgot Password link */}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Or Login with */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>Or Login with</Text>
        <View style={styles.orLine} />
      </View>

      {/* Social buttons row */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>F</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>A</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Register */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Don’t have an account? </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.registerNow}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
  emailInput: {
    fontSize: 16,
    padding: 12,
    color: '#000',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 12,
    color: '#007AFF', // Blue color for forgot password
  },
  loginButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  loginButtonText: {
    color: '#fff',
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
    backgroundColor: '#EAEAEA',
  },
  orText: {
    marginHorizontal: 8,
    color: '#666',
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
    backgroundColor: '#F5F5F5',
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
    color: '#666',
  },
  registerNow: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});
