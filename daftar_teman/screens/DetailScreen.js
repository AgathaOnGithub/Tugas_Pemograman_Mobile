import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { classmate } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{classmate.name}</Text>
      <Text style={styles.details}>Sekolah Asal: {classmate.school}</Text>
      <Text style={styles.details}>Discord: {classmate.discord}</Text>
      <Button title="Kembali ke Beranda" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginVertical: 10,
  },
});
