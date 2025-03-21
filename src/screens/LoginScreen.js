// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/colors';
import {HighlightLabelButton, PlaneLabelButton} from '../components/Buttons/LabelButton';
import BaseButton from '../components/Buttons/BaseButton';
import PlaneTextInput from '../components/TextInput/PlaneTextInput';
import ToggleIconTextInput from '../components/TextInput/ToggleIconTextInput';


const LoginScreen = () => {

    const navigation = useNavigation();
    const [isSecurePassword, setIsSecurePassword] = useState(false);
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
      <PlaneTextInput style={styles.emailInput}
          placeholder="Enter your email"
          placeholderTextColor={Colors.medium} />
          
      {/* Password Field (with eye icon) */}
      <ToggleIconTextInput style={styles.emailInput}
          placeholder="Enter your password"
          icon2="eye"
          icon1="eye-off"
          color1= {Colors.medium}
          color2={Colors.medium}
          onIconClicked={x => setIsSecurePassword(x)}
          isSecureText={isSecurePassword}
          placeholderTextColor={Colors.medium} />

      {/* Forgot Password link */}
      <PlaneLabelButton onPress={() => goToLogin()} 
        style={styles.forgotContainer} 
        onClickedBackgroundColor="transparent" 
        onClickedTextColor={Colors.highlightMedium}
        labelStyle={styles.forgotText}
        label = 'Forgot Password'/>

      {/* Login Button */}
      <HighlightLabelButton
          style={styles.loginButton}
          onPress={onLoginPress}
          label='Login'
      />

      {/* Or Login with */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.orLine} />
      </View>

      {/* Social buttons row */}
      <BaseButton
        style={styles.googleLoginButton}
        onClickedBackgroundColor={Colors.mediumLight}
        onClickedTextColor={Colors.veryDark}
        onPress={() => console.log('Login with Google pressed')}
      >
        <Icon name="google" size={24} color="#DB4437" style={styles.googleIcon} />
        <Text style={styles.googleText}>Login with Google</Text>
      </BaseButton>

      {/* Bottom Register */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Don’t have an account? </Text>
        <PlaneLabelButton
            style={styles.registerNowButton}
            onClickedBackgroundColor='transparent'
            onClickedTextColor={Colors.highlightMedium}
            onPress={() => goToSignUp()}
            labelStyle={styles.registerNow}
            label='Register Now'
        />
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
    width:'100%',
    color: Colors.dark,
    paddingVertical:0,
    marginBottom: 15,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    paddingVertical: 0,
    marginBottom: 20,
    fontSize: 12,
    paddingHorizontal:0,
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
    paddingHorizontal:0,
  },
  registerNow: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '600',
  },
});
