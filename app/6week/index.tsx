import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SixWeekIndex() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image
          source={require('../../assets/images/logo.jpg')} 
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Titre principal */}
        <Text style={styles.title}>Empowering the Nation</Text>

        {/* Boutons des cours */}
        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6week/child-minding')}
        >
          <Text style={styles.boxText}>Child Minding</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6week/cooking')}
        >
          <Text style={styles.boxText}>Cooking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6week/garden-maintenance')}
        >
          <Text style={styles.boxText}>Garden Maintenance</Text>
        </TouchableOpacity>

        {/* Bouton retour */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
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
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { alignItems: 'center', padding: 20, paddingBottom: 120 },
  logo: { width: 120, height: 120, marginTop: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32', marginVertical: 20, textAlign: 'center' },
  box: {
    width: '100%',
    padding: 20,
    backgroundColor: '#90ee90',
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#003300',
  },
  backButton: {
    marginTop: 20,
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
