import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Pressable } from 'react-native';
import HelperButton from './HelperButton';

const Calculator = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const alcoolValue = parseFloat(alcool.replace(',', '.'));
    const gasolinaValue = parseFloat(gasolina.replace(',', '.'));

    if (isNaN(alcoolValue) || isNaN(gasolinaValue)) {
      setResult('Por favor, insira valores válidos.');
      return;
    }

    const ratio = alcoolValue / gasolinaValue;

    if (ratio < 0.7) {
      setResult('A recomendação é abastecer com álcool.');
    } else {
      setResult('A recomendação é escolher a gasolina.');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/gasPump.png')}
          style={{ width: 100, height: 105, backgroundColor: 'dark' }}
        />
      <Text style={styles.title}>Qual a melhor opção?</Text>

      <TextInput
        style={styles.input}
        placeholder="Álcool (preço por litro)"
        inputMode="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Gasolina (preço por litro)"
        inputMode="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <Pressable style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>

      {result ? <Text style={styles.result}>{result}</Text> : null}

      <HelperButton>
        * O cálculo é feito dividindo o preço do álcool pelo preço da gasolina. Se o resultado for menor que 0,7, é mais vantajoso abastecer com álcool.
      </HelperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 20,
  },
});

export default Calculator;
