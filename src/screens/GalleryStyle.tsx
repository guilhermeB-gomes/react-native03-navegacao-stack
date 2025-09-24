import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 24
  },
  // ADICIONE ESTAS LINhas:
  botao: {
    backgroundColor: '#000',
    padding: 15,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff'
  }
});