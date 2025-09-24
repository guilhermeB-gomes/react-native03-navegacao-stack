import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles } from './SettingsStyle';

export function Settings({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>SETTINGS</Text>
      <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}