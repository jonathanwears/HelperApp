import React from 'react';
import { TextInput } from 'react-native';
import CounterTextStyle from '../../utils/Styles/CounterTextStyle';

function KmInput({ name, updateKm, km }) {

  function updateKmNum(event) {
    updateKm(name, event);
  }

  return (
    <TextInput
      style={CounterTextStyle.text}
      onChangeText={updateKmNum}
      keyboardType='number-pad'
      name={name}
    >
      {km}
    </TextInput> 
  )
}

export default KmInput;
