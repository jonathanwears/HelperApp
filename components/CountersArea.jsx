import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Counter from './Counter/Counter';
import ComponentNames from '../utils/json/ComponentNames.json';
import BasicAreaStyle from '../utils/Styles/BasicAreaStyle';
import Title from '../utils/Styles/Title';


function CountersArea() {
  const COUNTER_NAME = 'Counters';

  return (
    <View style ={styles.container}>
      <View>
        <Title name={COUNTER_NAME} />
      </View>
      <View style={BasicAreaStyle.container}>
        {ComponentNames.counterNames.map(entry => {
          return (
            <Counter key={uuid()} entry={entry} />
          )
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection :'column',
    backgroundColor: '#262626',
    marginTop:10,
    borderRadius: 10,
  }
})

export default CountersArea;
