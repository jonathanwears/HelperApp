import React from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Counter from './Counter/Counter';
import ComponentNames from '../utils/json/ComponentNames.json';
import BasicAreaStyle from '../utils/Styles/BasicAreaStyle';

function CountersArea() {

  return (
    <View style={BasicAreaStyle.container}>
      {ComponentNames.counterNames.map(entry => {
        return (
          <Counter key={uuid()} entry={entry} />
        )
      })}
    </View>
  );
};

export default CountersArea;
