import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const estilo = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white', 
  },
  buttonTitle: {
    color: 'red',
    fontSize: 20,
  },
});

const Botao = ({ title, onPressButton }) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={estilo.buttonContainer}>
        <Text style={estilo.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Botao;