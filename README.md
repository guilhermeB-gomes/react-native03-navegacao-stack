Navegação no React Native

1) Na pasta do projeto: npm install @react-navigation/native
2) npx expo install react-native-screens react-native-safe-area-context
3) npm install @react-navigation/stack
3) criar a pasta src
4) em src crie as pastas screens e routes 
5) em screens crie os arquivos Home.tsx, Gallery.tsx, HomeStyles.tsx, Gallery.tsx
4) criar dentro de routes - StackRoutes.tsx
5) código do StackRoutes.tsx
import {Home} from '../screens/Home';
import {Gallery} from '../screens/Gallery';
import { createStackNavigator } from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
   <Navigator screenOptions={{headerShown:false}}>
    <Screen name='home' component={Home}></Screen>
    <Screen name='gallery' component={Gallery}></Screen>
   </Navigator>
  );
}

Código em App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/routes/StackRoutes";

export default function App() {
  return (
   <NavigationContainer>
      <StackRoutes />
   </NavigationContainer>
  );
}


No Home.tsx
import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './HomeStyle';

export function Home({navigation}:any) {

  function navToGallery(){
    navigation.navigate('gallery');
  }
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
        <Pressable style={styles.botao} onPress={navToGallery}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
    </View>
  );
}

No HomeStyle.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  botao:{
    backgroundColor:'#000',
    padding:15
  },
  textoBotao:{
    color:'#fff'
  }
});


No Gallery.tsx
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './GalleryStyle';

export function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GALLERY</Text>
    </View>
  );
}

Em GalleryStyle.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ff0000',
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    color:'#fff'
  }
});





