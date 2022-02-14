import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TitleCounter({ entry }) {

  return (
    <Text style={styles.text}>{entry}</Text>
  )

}

const styles = StyleSheet.create({
  text: {
    fontSize: 15, 
  }
})

export default TitleCounter;
