import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const HelperButton = ({ children }) => {
  const [showHelper, setShowHelper] = useState(false);

  const toggleHelper = () => {
    setShowHelper(!showHelper);
  };

  return (
    <View style={styles.helperContainer}>
      <Pressable style={styles.helperButton} onPress={toggleHelper}>
        <Text style={styles.helperText}>?</Text>
      </Pressable>
      {showHelper && <Text style={styles.helperDescription}>{children}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  helperContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  helperButton: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helperText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  helperDescription: {
    color: '#CCC',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default HelperButton;
