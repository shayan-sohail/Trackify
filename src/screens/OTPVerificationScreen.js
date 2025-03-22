// src/screens/OTPVerificationScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { HighlightLabelButton, PlaneTextButton} from '../components/Buttons/LabelButton';
import Colors from '../constants/colors';

const OTPVerificationScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  
  // Create refs for each TextInput
  const inputsRef = useRef([]);

  const onChangeDigit = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < otp.length - 1) {
      // Move to next input if available
      inputsRef.current[index + 1].focus();
    }
  };

  // onKeyPress handler to detect backspace/delete key press
  const onKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
        console.log("Backspace pressed");
      // If current field has a value, clear it.
      if (otp[index] !== '') {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // Otherwise, move to previous field and clear it
        inputsRef.current[index - 1].focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };

  const onVerifyPress = () => {
    navigation.replace('LoadingScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        We have sent a verification code to abc@gmail.com
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => onChangeDigit(text, index)}
            onKeyPress={(e) => onKeyPress(e, index)}
            ref={(ref) => (inputsRef.current[index] = ref)}
          />
        ))}
      </View>

      <HighlightLabelButton style={styles.loginButton} onPress={onVerifyPress} 
        label={'Verify'} labelStyle={styles.loginButtonText}/>

      {/* Bottom row: Already have an account? */}
      <View style={styles.bottomRow}>
        <Text style={styles.resendText}>Didn't receive an OTP? </Text>
        <PlaneTextButton onPress={() => goToLogin()} 
                          label='Resend (35s)'/>
      </View>
    </View>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.veryLight,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.medium,
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.medium,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: Colors.light,
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
  resendText: {
    fontSize: 14,
    color: Colors.medium,
    textAlign: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerNow: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '600',
  },
  registerNowButton: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal:0
  },
});
