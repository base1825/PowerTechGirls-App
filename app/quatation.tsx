import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COURSES = [
  { name: 'Cooking', price: 750 },
  { name: 'Sewing', price: 750 },
  { name: 'Landscaping', price: 750 },
  { name: 'Garden Maintenance', price: 750 },
  { name: 'Childminding', price: 750 },
  { name: 'Life Skills', price: 750 },
  { name: 'First Aid', price: 750 },
];

export default function Quotation() {
  const router = useRouter();
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [vatAmount, setVatAmount] = useState<number>(0);

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.length * 750;

    // Discount logic
    let discountRate = 0;
    if (selectedCourses.length === 2) discountRate = 0.05;
    else if (selectedCourses.length === 3) discountRate = 0.1;
    else if (selectedCourses.length > 3) discountRate = 0.15;

    const discount = subtotal * discountRate;
    const discountedTotal = subtotal - discount;

    // VAT (15%)
    const vat = discountedTotal * 0.15;
    const finalTotal = discountedTotal + vat;

    setDiscountAmount(discount);
    setVatAmount(vat);
    setTotal(finalTotal);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo and Title */}
      <Image 
        source={require('../assets/images/logo.jpg')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.subtitle}>Quotation Form</Text>

      {/* Checkbox Courses */}
      <Text style={styles.label}>Select Courses:</Text>
      <View style={styles.courseContainer}>
        {COURSES.map((course) => (
          <TouchableOpacity
            key={course.name}
            style={[
              styles.courseItem,
              selectedCourses.includes(course.name) && styles.courseSelected,
            ]}
            onPress={() => toggleCourse(course.name)}
          >
            <Text
              style={[
                styles.courseText,
                selectedCourses.includes(course.name) && styles.selectedText,
              ]}
            >
              {selectedCourses.includes(course.name) ? '☑ ' : '☐ '}
              {course.name} - R{course.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calculate Button */}
      <View style={styles.calcButton}>
        <Button title="Calculate Total" onPress={calculateTotal} color="#4CAF50" />
      </View>

      {/* Result Display */}
      {total !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Subtotal: R{(selectedCourses.length * 750).toFixed(2)}</Text>
          <Text style={styles.resultText}>Discount: -R{discountAmount.toFixed(2)}</Text>
          <Text style={styles.resultText}>VAT (15%): +R{vatAmount.toFixed(2)}</Text>
          <Text style={styles.finalText}>Final Total: R{total.toFixed(2)}</Text>
        </View>
      )}

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f9fff9',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  courseContainer: {
    width: '100%',
    marginBottom: 20,
  },
  courseItem: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  courseSelected: {
    backgroundColor: '#c8f7c5',
  },
  courseText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  calcButton: {
    width: '90%',
    marginBottom: 20,
  },
  resultBox: {
    width: '90%',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 2,
  },
  finalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
