import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function OTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const router = useRouter();

  // ✅ FIXED: allow null refs
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // 👉 Move to next box
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    // 👉 Move back on delete
    if (!value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 4) {
      alert('Enter complete 4-digit OTP');
      return;
    }

    // ✅ Navigate to Home
    router.replace('/home');
  };

  const isDisabled = otp.join('').length !== 4;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Verify OTP 🔐</Text>
      <Text style={styles.subtitle}>Enter the 4-digit code</Text>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputs.current[index] = ref;
            }}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, isDisabled && styles.disabledButton]}
        onPress={handleVerify}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#440e66',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#ccc',
    marginBottom: 30,
  },

  otpContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },

  otpBox: {
    width: 55,
    height: 55,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 22,
    borderRadius: 12,
  },

  button: {
    backgroundColor: '#ff7a00',
    padding: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },

  disabledButton: {
    backgroundColor: '#a88aa0',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});