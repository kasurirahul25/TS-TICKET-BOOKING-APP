import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    alert(`Searching buses from ${from} to ${to} on ${date}`);
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.title}>TSRTC 🚍</Text>
      <Text style={styles.subtitle}>Book Your Bus Ticket</Text>

      {/* From */}
      <TextInput
        placeholder="From (e.g. Hyderabad)"
        value={from}
        onChangeText={setFrom}
        style={styles.input}
      />

      {/* To */}
      <TextInput
        placeholder="To (e.g. Vijayawada)"
        value={to}
        onChangeText={setTo}
        style={styles.input}
      />

      {/* Date */}
      <TextInput
        placeholder="Travel Date (DD/MM/YYYY)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search Buses</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0a1f44',
    marginBottom: 5,
  },

  subtitle: {
    color: '#555',
    marginBottom: 30,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2, // shadow for Android
  },

  button: {
    backgroundColor: '#db3b61',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});