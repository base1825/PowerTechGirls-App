import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Enquiry() {
  const router = useRouter();

  const openGoogleForm = () => {
    const url = 'https://forms.gle/PyG9m5t5aVooSCwv8';
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.subtitle}>Enquiry Form</Text>

      {/* Button to open Google Form */}
      <TouchableOpacity style={styles.formButton} onPress={openGoogleForm}>
        <Text style={styles.formButtonText}>Open Enquiry Form</Text>
      </TouchableOpacity>

      {/* Note */}
      <Text style={styles.note}>This opens on in your browser</Text>

      {/* Contact & Back */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/contact')}>
          <Ionicons name="call" size={30} color="#4CAF50" />
          <Text style={styles.iconText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
          <Text style={styles.backText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#006400', textAlign: 'center' },
  subtitle: { fontSize: 20, fontWeight: '600', marginBottom: 30 },
  formButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 15,
  },
  formButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  note: { fontSize: 14, color: '#555', marginBottom: 30, textAlign: 'center' },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  iconButton: { alignItems: 'center' },
  iconText: { marginTop: 5, fontSize: 14, color: '#333' },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  backText: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
});
