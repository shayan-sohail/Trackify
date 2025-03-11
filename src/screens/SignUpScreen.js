// src/screens/SignUpScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import IconTextInput from '../components/IconTextInput';
import Colors from '../constants/colors';
import MyButton from '../components/MyButton';

const { width } = Dimensions.get('window');

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must be at most 30 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // If all checks pass, print the object with name, email, and password
      const { name, email, password } = values;
      console.log({ name, email, password });
      navigation.replace('LoadingScreen');
    },
  });

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

      {/* Name Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={Colors.medium}
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
        />
      </View>
      {formik.submitCount > 0 && formik.errors.name && (
        <Text style={styles.errorText}>{formik.errors.name}</Text>
      )}

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={Colors.medium}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {formik.submitCount > 0 && formik.errors.email && (
        <Text style={styles.errorText}>{formik.errors.email}</Text>
      )}

      {/* Password Field (with eye icon) */}
      <IconTextInput
        placeholder="Password"
        secureTextEntry={true}
        containerStyle={styles.inputContainer}
        value={formik.values.password}
        isSecureInput={true}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      {formik.submitCount > 0 && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}

      {/* Confirm Password Field (with eye icon) */}
      <IconTextInput
        placeholder="Confirm password"
        secureTextEntry={true}
        containerStyle={styles.inputContainer}
        value={formik.values.confirmPassword}
        isSecureInput={true}
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
      />
      {formik.submitCount > 0 && formik.errors.confirmPassword && (
        <Text style={styles.errorText}>{formik.errors.confirmPassword}</Text>
      )}

      {/* Register Button */}
      <MyButton style={styles.registerButton} onPress={formik.handleSubmit}>
        <Text style={styles.loginButtonText}>Register</Text>
      </MyButton>

      {/* Or Register with */}
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}> or </Text>
        <View style={styles.orLine} />
      </View>

      {/* Social button */}
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
          onPress={goToLogin}
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
    alignItems: 'center',
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
    marginVertical: 5,
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    padding: 12,
    color: Colors.dark,
  },
  registerButton: {
    width: '100%',
    marginVertical: 15,
  },
  loginButtonText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
    width: '100%',
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
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 2,
  },
});
