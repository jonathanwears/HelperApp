import React from 'react';
import { View } from 'react-native';
import KmInput from './KmInput';

function Udometer({name, updateKm, km}) {
  
  return (
    <View>
      <KmInput name={name} updateKm={updateKm} km={km} />
    </View>
  );
}

export default Udometer;
