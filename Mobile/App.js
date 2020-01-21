//expo init <nome do Projeto <- Criar projeto React Native
//babel <- converte Javascript recente para o antigo
//Elementos do React Native
//expo start

//yarn socket.io-client


import React from 'react';
import { StatusBar , YellowBox}  from 'react-native';


import Routes from './src/routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket'])

export default function App() {
  return (
    <>
      <StatusBar barStyle = "light-content" backgroundColor = "#7d40e7"/>
      <Routes />
    </>
  );
}


