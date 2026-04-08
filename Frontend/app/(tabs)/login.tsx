import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!name.trim()) {
      alert('Enter your name');
      return;
    }

    if (phone.length !== 10) {
      alert('Enter valid 10-digit phone number');
      return;
    }

    // 👉 Navigate to OTP screen
    router.push('/otp');
  };

  const isDisabled = name === '' || phone.length !== 10;

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>TSRTC 🚍</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Name Input */}
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Phone Input with +91 */}
      <View style={styles.phoneContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          placeholder="Enter phone number"
          placeholderTextColor="#888"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          maxLength={10}
          style={styles.phoneInput}
        />
      </View>

      {/* Button */}
      <TouchableOpacity 
        style={[styles.button, isDisabled && styles.disabledButton]} 
        onPress={handleLogin}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#440e66',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitle: {
    color: '#ddd',
    marginBottom: 30,
    fontSize: 14,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  phoneContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 12,
  },

  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },

  phoneInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#db3b61',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: '#a88aa0', // faded color when disabled
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});