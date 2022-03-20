import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Header() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helper App</Text>
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
