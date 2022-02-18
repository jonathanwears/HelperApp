import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './Buttons/CustomButton';

function Header() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helper App</Text>
      <Button title="clear" onPress={ () => AsyncStorage.clear()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'violet',
    height: 300,
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
