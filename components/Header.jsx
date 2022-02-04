import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';


function Header({ title }) {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
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
