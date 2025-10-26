import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Calculation() {
  const router = useRouter();

  // User info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Courses selection
  const courseList = ['Sewing', 'Cooking', 'Life Skills', 'Landscaping', 'First Aid', 'Child Minding', 'Garden Maintenance'];
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  // Handle course toggle
  const toggleCourse = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // Fee per course
  const fees: { [key: string]: number } = {
    'Sewing': 1500,
    'Cooking': 750,
    'Life Skills': 1500,
    'Landscaping': 1500,
    'First Aid': 1500,
    'Child Minding': 750,
    'Garden Maintenance': 750
  };

  // Calculate total
  const calculateTotal = () => {
    if (!name || !email || !phone || selectedCourses.length === 0) {
      Alert.alert('Please fill all fields and select at least one course.');
      return;
    }

    let total = selectedCourses.reduce((sum, course) => sum + (fees[course] || 0), 0);

    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.10;
    else if (selectedCourses.length > 3) discount = 0.15;

    const finalTotal = total - total * discount;
    Alert.alert(`Total Fee`, `You selected ${selectedCourses.length} course(s).\nDiscount: ${discount*100}%\nTotal: R${finalTotal.toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.subtitle}>Select Courses:</Text>
      {courseList.map(course => (
        <TouchableOpacity key={course} style={styles.courseItem} onPress={() => toggleCourse(course)}>
          <Text style={{ flex: 1 }}>{course}</Text>
          <Text>{selectedCourses.includes(course) ? '✅' : '⬜'}</Text>
        </TouchableOpacity>
      ))}

      <Button title="Calculate Total" onPress={calculateTotal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitle: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginVertical: 5 },
  courseItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginVertical: 5 }
});
