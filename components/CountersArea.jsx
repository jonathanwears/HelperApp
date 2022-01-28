import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Counter from './Counter';


function CountersArea() {

  const array = ["a", "b", "c"]


  return (

    array.map(entry => {
    
      return (
          <Counter style={styles.container} key={uuid()} entry={entry} />
      )
       
    })
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',

  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  }
});

export default CountersArea;
