import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import { getByDisplayValue } from "@testing-library/react";
import React, { Fragment } from "react";
import {StyleSheet,Text, Image} from "react-native";
import { View } from "react-native-web";
import centralPerk from '../imgs/coffee1.jpeg';

const Card = () => {
  return (
    <View className='App' style={styles.card} >
      <img src={centralPerk} style={styles.img} alt=""/>
      <Text style={styles.text}>Mocha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: '30%',
    borderRadius: '10%',
    backgroundColor: 'darkgreen'
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '100%',
    paddingBottom: '15px',
    display: 'revert'
},
  img: {
    width: '100%',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0%',
    borderBottomRightRadius: '0%',
    paddingBottom: '15px'
  }
})

export default Card
