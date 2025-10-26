import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChildMinding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image 
          source={require('../../assets/images/logo.jpg')} // 
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Titre principal */}
        <Text style={styles.title}>Empowering the Nation</Text>

        {/* Titre du cours */}
        <Text style={styles.courseTitle}>Child Minding</Text>

        {/* Informations */}
        <Text style={styles.text}>Fees: R750</Text>
        <Text style={styles.text}>Purpose: To provide basic child and baby care.</Text>

        <Text style={styles.subTitle}>Content:</Text>
        <Text style={styles.list}>• Birth to six-month old baby needs</Text>
        <Text style={styles.list}>• Seven-month to one year old needs</Text>
        <Text style={styles.list}>• Toddler needs</Text>
        <Text style={styles.list}>• Educational toys</Text>

        {/* Bouton Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/6week')}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Petit bouton Go to Quotation */}
        <TouchableOpacity style={styles.smallButton} onPress={() => router.push('/quatation')}>
          <Text style={styles.smallButtonText}>Go to Quotation</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barre d’icônes fixe en bas */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/contact')}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 120, // espace pour la barre du bas
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 20,
    textAlign: 'center',
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 5,
    lineHeight: 22,
    width: '95%',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    width: '95%',
  },
  list: {
    fontSize: 16,
    marginVertical: 2,
    width: '95%',
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButton: {
    marginTop: 15,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
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
  iconButton: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 13,
    color: '#333',
    marginTop: 4,
  },
});
