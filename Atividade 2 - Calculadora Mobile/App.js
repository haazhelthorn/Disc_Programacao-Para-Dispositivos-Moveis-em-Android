import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './components/Calculator';

export default function App() {
  
    return (

      <View style={styles.container}>
        <Calculator />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
