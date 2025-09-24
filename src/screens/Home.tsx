import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';

import { styles } from './HomeStyle';

export function Home({ navigation }: any) {
  function navToGallery() {
    navigation.navigate('gallery');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text> {/* Agora styles.title existe */}
      
      <Pressable style={styles.botao} onPress={navToGallery}>
        <Image 
          source={require('../../assets/images.jpg')} 
          style={{ width: 300, height: 300 }}
        />
        <Text style={styles.textoBotao}>Ir para a Galeria</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('profile')}>
        <Text style={styles.textoBotao}>Ir para Perfil</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('settings')}>
        <Text style={styles.textoBotao}>Ir para Configurações</Text>
      </Pressable>
    </View>
  );
}