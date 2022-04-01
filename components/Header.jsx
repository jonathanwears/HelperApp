import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MinusDownCounterIcon from '../utils/Styles/MinusDownCounterIcon';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count</Text>
      <MinusDownCounterIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 170,
    padding: 35,
    paddingBottom: 25,
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  }
});

export default Header;
