import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/card';
import centralPerkLogo from './src/imgs/central_perk_logo.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
        <img src={centralPerkLogo} alt="logo" style={{width: '20%', paddingBottom:'4%'}}/>
        <p style={{color: 'black'}}>
          Try some of our most popular flavours!
        </p>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
  },
  header: {
    backgroundColor: '#fff',
    innerHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }
});
