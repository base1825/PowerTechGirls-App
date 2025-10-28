import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo en haut */}
      <Image 
        source={require('../../assets/images/logo.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Titre principal */}
      <Text style={styles.title}>Empowering the Nation</Text>

      {/* Boutons p */}
      {/* Boutons des cours */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6month/first-aid')}
        >
          <Text style={styles.boxText}>First-Aid</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6month/landscaping')}
        >
          <Text style={styles.boxText}>landscaping</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6month/life-skills')}
        >
          <Text style={styles.boxText}>Life-Skills</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => router.push('/6month/sewing')}
        >
          <Text style={styles.boxText}>Sewing</Text>
        </TouchableOpacity>
      </View>

      {/* icones */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/contact')}>
          <Ionicons name="call" size={28} color="#4CAF50" />
          <Text style={styles.iconLabel}>Contact</Text>
        </TouchableOpacity>

         <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => router.push('/home')}
                >
                  <Text style={styles.backButtonText}>Back to Home</Text>
                </TouchableOpacity>

         

        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/enquiry')}>
          <Ionicons name="chatbubbles" size={28} color="#4CAF50" />
          <Text style={styles.iconLabel}>Enquiry</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  box: {
    width: '85%',
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  mainButton: {
    width: '85%',
    backgroundColor: '#4CAF50',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  quotationButton: {
    width: '60%',
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  quotationText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconLabel: {
    fontSize: 13,
    color: '#333',
    marginTop: 4,
  },
});
