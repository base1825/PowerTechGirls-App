import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Enquiry() {
  const router = useRouter();

  // Open Google Form
  const handleEnquiry = (): void => {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeoJLg6awAhnVd2jQi1s7LV3kSr_nqfrOLsiPcpdrfobA3nqQ/viewform?usp=header';
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', "Can't open the Google Form");
        }
      });
  };

  // Contact handler (just scroll info text or can link to contact page)
  const handleContact = (): void => {
    router.push('/contact');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Empowering the Nation</Text>
        <Text style={styles.heading}>Enquiry</Text>

        <Text style={styles.infoText}>
          Please click the button below to submit your enquiry via our Google Form.
        </Text>

        {/* Google Form Button */}
        <TouchableOpacity style={styles.enquiryButton} onPress={handleEnquiry}>
          <Text style={styles.enquiryText}>Open Enquiry Form</Text>
        </TouchableOpacity>

        {/* Back to Home */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Buttons icons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton} onPress={handleContact}>
          <Ionicons name="call" size={26} color="#4CAF50" />
          <Text style={styles.iconLabel}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={handleEnquiry}>
          <Ionicons name="chatbubbles" size={26} color="#4CAF50" />
          <Text style={styles.iconLabel}>Enquiry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { alignItems: 'center', padding: 20, paddingBottom: 140 },
  logo: { width: 120, height: 120, marginTop: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32', marginVertical: 20, textAlign: 'center' },
  heading: { fontSize: 20, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
  infoText: { fontSize: 16, color: '#333', textAlign: 'center', marginVertical: 20 },
  enquiryButton: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  enquiryText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  backButton: {
    marginTop: 15,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconButton: { alignItems: 'center' },
  iconLabel: { fontSize: 13, color: '#333', marginTop: 4 },
});
