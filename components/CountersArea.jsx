import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Counter from './Counter/Counter';
import ComponentNames from '../utils/json/ComponentNames.json';

function CountersArea() {

  return (
    <View style={styles.container}>
      {ComponentNames.counterNames.map(entry => {
        return (
          <Counter key={uuid()} entry={entry} />
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'blue',
    
    },
  text: {
    textAlign: 'center',
    fontSize: 25,
  }
});

export default CountersArea;
