import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const classmates = [
  { id: '1', name: 'Hadi Ar-Rahman', school: 'SMPN 1 KOTA SUKABUMI', discord: '@neuro_kotaro04' },
  { id: '2', name: 'Panca Sena Putra', school: 'SMPN 1 KOTA SUKABUMI', discord: '@getyourpassport' },
  { id: '3', name: 'J. Eka Putra', school: 'SMPN 1 KOTA SUKABUMI', discord: '@herethesouce' },
  { id: '4', name: 'Putra Satria Nagara Mahmud', school: 'SMPN 1 KOTA SUKABUMI', discord: '@rainie_ganti_nama_awokwokwk' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={classmates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Button
              title="Lihat Detail"
              onPress={() => navigation.navigate('Detail', { classmate: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
  },
});
