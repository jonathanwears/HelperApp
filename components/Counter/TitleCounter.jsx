import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TitleCounter({ entry }) {

  return (
    <Text style={styles.text}>{entry}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20, 
    paddingBottom: 10,
  }
})

export default TitleCounter;
