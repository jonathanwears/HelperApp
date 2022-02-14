import React from 'react';
import { TextInput, Text } from 'react-native';

function KmInput({ name, updateKm, km }) {

  function updateKmNum(event) {
    updateKm(name, event);
  }

  return (
    <TextInput
      onChangeText={updateKmNum}
      keyboardType='number-pad'
      name={name}
    >
      {km}
    </TextInput> 

  )
}

export default KmInput;
