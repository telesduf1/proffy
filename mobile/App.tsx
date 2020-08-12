import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Front design: Components pre-criados do react-native
// import { StyleSheet, Text, View } from 'react-native';

import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

// JSX: JS + XML
export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {

    return <AppLoading />;

  } else {

    return (

      // Fragment: React não permite que seja passado mais de um component
      //           sem uma tag em volta deles
      <>
        <AppStack />
        <StatusBar style="light" />
      </>

      // // Tudo que for uma caixa é em uma View
      // <View style={styles.container}>

      //   {/* Tudo que for texto é em um Text */}
      //   <Text style={styles.title}>Hello NLW!</Text>

      //   {/* Configurar como a status irá se comportar */}
      //   <StatusBar style="auto" />
      // </View>
    );

  }

}

// Não existe arquivos css
// É um objeto do JavaScript
// Não existe herança de estilos
//  Se quisermos, adicionar um estilo especifico para um component, temos que definir um styles.propriedade pra ele
// Não existem hífens
// Todos elementos são display flex
// Padrão do flexDirection é column
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title: {
//     fontSize: 32,
//     color: '#FFF',
//     fontWeight: 'bold'
//   }
// });