import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../../assets/images/logo.jpg')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      {/* Titre */}
      <Text style={styles.title}>Empowering the Nation</Text>

      {/* Boutons principaux */}
      <TouchableOpacity style={styles.boxButton} onPress={() => router.push('/6month')}>
        <Text style={styles.buttonText}>6 Months Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxButton} onPress={() => router.push('/6week')}>
        <Text style={styles.buttonText}>6 Weeks Courses</Text>
      </TouchableOpacity>

      {/* Petit bouton vers Quotation */}
      <TouchableOpacity style={styles.smallButton} onPress={() => router.push('/quatation')}>
        <Text style={styles.smallButtonText}>Go to Quotation</Text>
      </TouchableOpacity>

      {/* Icônes du bas */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/contact')}>
          <Ionicons name="call" size={30} color="#4CAF50" />
          <Text style={styles.iconText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/enquiry')}>
          <Ionicons name="chatbubbles" size={30} color="#4CAF50" />
          <Text style={styles.iconText}>Enquiry</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  boxButton: {
    width: '80%',
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  smallButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 2,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 50,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
});
