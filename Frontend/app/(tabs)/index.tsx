import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function Splash() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Ripple animation loop
    Animated.loop(
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    // Navigation
    setTimeout(() => {
      const isLoggedIn = false;
      if (isLoggedIn) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    }, 2500);
  }, []);

  const scale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 3], // circle expands
  });

  const opacity = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0], // fades out
  });

  return (
    <View style={styles.container}>

      {/* Ripple Circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      />

      {/* Logo */}
      <Image
        source={require('/Users/kasurirohith/Desktop/TS-TICKET-BOOKING-APP/Frontend/assets/images/logo1.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>TS Ticket Booking 🚍</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#440e66',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 160,
    height: 160,
    zIndex: 2,
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  circle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ffffff33', // light transparent wave
  },
});