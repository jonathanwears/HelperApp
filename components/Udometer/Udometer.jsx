import React from 'react';
import { View } from 'react-native';
import KmInput from './KmInput';
import TitleCounter from '../CountersArea/Counter/TitleCounter';
import CounterStyle from '../../utils/Styles/CounterStyle';

function Udometer({ name, updateKm, km }) {
  
  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={name}/>
      <KmInput name={name} updateKm={updateKm} km={km} />
    </View>
  );
}

export default Udometer;
