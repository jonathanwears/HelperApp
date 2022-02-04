import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Counter from './Counter';
import ComponentNames from '../utils/json/ComponentNames.json';

function CountersArea() {

  return (

    ComponentNames.counterNames.map(entry => {
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
