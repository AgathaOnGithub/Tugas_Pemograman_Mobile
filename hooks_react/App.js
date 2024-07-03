import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
  const [teks, setTeks] = useState('');

  const jumlahVokal = useMemo(() => {
    const vokal = ['a', 'e', 'i', 'o', 'u'];
    return teks
      .toLowerCase()
      .split('')
      .filter(huruf => vokal.includes(huruf)).length;
  }, [teks]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penghitung Huruf Vokal</Text>
      <TextInput
        style={styles.input}
        value={teks}
        onChangeText={setTeks}
        placeholder="Masukkan teks"
      />
      <Text style={styles.result}>Jumlah Huruf Vokal: {jumlahVokal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  result: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default App;
