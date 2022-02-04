import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Header({ title }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Button title="clear" onPress={ () => AsyncStorage.clear()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'violet',
    height: 150,
    padding: 35,
    paddingBottom: 45,
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
