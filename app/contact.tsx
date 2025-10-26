import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Contact() {
  const router = useRouter();

  // Click handler for location URLs
  const handleLocation = (url: string): void => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', "Can't open this location URL");
        }
      });
  };

  // Locations array
  const locations: { name: string; url: string }[] = [
    { name: 'Sandton', url: 'https://www.google.com/maps/place/Sandton,%20Johannesburg,%20South%20Africa/' },
    { name: 'Houghton', url: 'https://www.google.com/maps/place/Houghton,%20Johannesburg,%20South%20Africa/' },
    { name: 'Braamfontein', url: 'https://www.google.com/maps/place/Braamfontein,%20Johannesburg,%20South%20Africa/' },
  ];

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
        <Text style={styles.heading}>Contact Us</Text>

        {/* Phone & Email as text */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>📞 Phone: +27 123 456 789</Text>
          <Text style={styles.infoText}>✉ Email: info@empoweringthenation.co.za</Text>
        </View>

        {/* Locations in Flexbox */}
        <Text style={[styles.heading, { marginTop: 20 }]}>Our Locations</Text>
        <View style={styles.locationsContainer}>
          {locations.map((loc) => (
            <TouchableOpacity
              key={loc.name}
              style={styles.locationButton}
              onPress={() => handleLocation(loc.url)}
            >
              <Text style={styles.locationText}>{loc.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Enquiry button */}
        <TouchableOpacity
          style={styles.enquiryButton}
          onPress={() => router.push('/enquiry')}
        >
          <Text style={styles.enquiryText}>Make an Enquiry</Text>
        </TouchableOpacity>

        {/* Back to Home */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom icons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="call" size={26} color="#4CAF50" />
          <Text style={styles.iconLabel}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/enquiry')}>
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
  infoBox: { marginVertical: 10, alignItems: 'center' },
  infoText: { fontSize: 16, color: '#0066cc', marginVertical: 3 },
  locationsContainer: {
    flexDirection: 'row', // horizontal row
    flexWrap: 'wrap', // allow wrapping
    justifyContent: 'center', // center horizontally
    marginVertical: 10,
  },
  locationButton: {
    backgroundColor: '#90ee90',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    minWidth: 120, // ensure buttons have similar size
    alignItems: 'center',
  },
  locationText: { fontSize: 16, fontWeight: '600', color: '#003300' },
  enquiryButton: {
    marginTop: 20,
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
