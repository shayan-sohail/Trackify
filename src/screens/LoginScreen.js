// src/screens/LoginScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import IconTextInput from '../components/IconTextInput'; // For password
import { TextInput } from 'react-native-gesture-handler'; // or from 'react-native' if you prefer
import Colors from '../constants/colors';
import MyButton from '../components/MyButton';

const LoginScreen = () => {

    const navigation = useNavigation();

    const goToSignUp = () => {
      navigation.replace('SignUpScreen');
    };

    // Updated: on login press, navigate to LoadingScreen
    const onLoginPress = () => {
      navigation.replace('LoadingScreen');
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
      <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>

      {/* Email Field (normal text input) */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          placeholderTextColor={Colors.medium}  
        />
      </View>

      {/* Password Field (with eye icon) */}
      <IconTextInput
        placeholder="Enter your password"
        secureTextEntry={true}
        containerStyle={{ marginBottom: 5 }}
        isSecureInput={true}
      />

      {/* Forgot Password link */}
      <MyButton onPress={() => goToLogin()} 
        style={styles.forgotContainer} 
        onClickedBackgroundColor="transparent" 
        onClickedTextColor={Colors.highlightMedium}>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </MyButton>

      {/* Login Button */}
      <MyButton
          style={styles.loginButton}
          onPress={onLoginPress}
        >
        <Text style={styles.loginButtonText}>Login</Text>
      </MyButton>

      {/* Or Login with */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.orLine} />
      </View>

      {/* Social buttons row */}
      <MyButton
        style={styles.googleLoginButton}
        onClickedBackgroundColor={Colors.mediumLight}
        onClickedTextColor={Colors.veryDark}
        onPress={() => console.log('Login with Google pressed')}
      >
        <Icon name="google" size={24} color="#DB4437" style={styles.googleIcon} />
        <Text style={styles.googleText}>Login with Google</Text>
      </MyButton>

      {/* Bottom Register */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Don’t have an account? </Text>
        <MyButton
            style={styles.registerNowButton}
            onClickedBackgroundColor='transparent'
            onClickedTextColor={Colors.highlightMedium}
            onPress={() => goToSignUp()}
        >
          <Text style={styles.registerNow}>Register Now</Text>
        </MyButton>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  emailInput: {
    fontSize: 16,
    padding: 12,
    color: Colors.dark,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    paddingVertical: 0,
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 12,
    color: Colors.highlight // Blue color for forgot password
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
  registerNowButton: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
  },
  registerNow: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '600',
  },
});
