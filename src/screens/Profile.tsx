import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles } from './ProfileStyle';

export function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>PROFILE</Text>
      <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}