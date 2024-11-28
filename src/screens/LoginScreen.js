import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView,} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <View style={styles.box}>
          <Text style={styles.headingLg}>Welcome</Text>
          <Text style={styles.headingXs}>Sign in to continue!</Text>

          <View style={styles.formContainer}>
            <View style={styles.formControl}>
              <Text style={styles.label}>Email ID</Text>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
              />
              <TouchableOpacity onPress={() => console.log('Forgot password')}>
                <Text style={styles.forgotPassword}>Forget Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>I'm a new user. </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 8,
    paddingVertical: 32,
    width: '90%',
    maxWidth: 290,
  },
  headingLg: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
  headingXs: {
    marginTop: 4,
    color: '#4b5563',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
    gap: 12,
  },
  formControl: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6366f1',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#6366f1',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#4b5563',
  },
  signUpText: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
});

export default LoginScreen;