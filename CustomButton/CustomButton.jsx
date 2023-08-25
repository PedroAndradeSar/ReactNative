import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ backgroundDoBotao, fonteDaCorDoBotao }) => {
  const clickAqui = () => {
    console.log('Botão clicado');
  };

  const strilo = StyleSheet.create({
    button: {
      padding: 20,
      borderRadius: 100,
      backgroundColor: backgroundDoBotao,
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      color: fonteDaCorDoBotao,
    },
  });

  return (
    <TouchableOpacity
      style={[strilo.button]}
      onPress={clickAqui}
    >
      <Text style={[strilo.text]}>Clique aqui</Text>
    </TouchableOpacity>
  );
};

export default Botao;