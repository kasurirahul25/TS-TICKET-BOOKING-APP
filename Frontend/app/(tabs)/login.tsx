import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    if (phone.length !== 10) {
      alert('Enter valid 10-digit phone number');
      return;
    }
    alert(`OTP sent to +91 ${phone}`);
  };

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>TSRTC</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Name Input */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Phone Input with +91 */}
      <View style={styles.phoneContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          placeholder="Enter phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          maxLength={10}
          style={styles.phoneInput}
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#ccc',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  /* 🔥 Phone Styling */
  phoneContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
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
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});