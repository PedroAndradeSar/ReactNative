import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Botao from './Botao';

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 200,
      color:"white"
    },
});

const Contador= () => {

    const [contador, setContador] = useState(0);
  
    const incrementarMais = () => {
      setContador(contador + 1);
    }
  
    const incrementarMenos = () => {
      setContador(contador - 1);
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.text}>{contador}</Text>
                <Botao title='Incrementar +1' onPressButton={incrementarMais} />
                <Botao title='Decrementar -1' onPressButton={incrementarMenos} />
        </SafeAreaView>
    );
}

export default Contador;