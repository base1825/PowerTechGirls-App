import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Placeholder for registration logic
    console.log('Register pressed', name, email, password);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.subtitle}>Register</Text>

      <Text>Name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
        value={name} 
        onChangeText={setName} 
      />

      <Text>Email:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your email" 
        value={email} 
        onChangeText={setEmail} 
      />

      <Text>Password:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      <Button title="Register" onPress={handleRegister} />
      <View style={{ marginTop: 10 }}>
        <Button title=" Welcome" onPress={() => router.push('/home')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }
});
