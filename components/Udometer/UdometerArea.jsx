import React from 'react';
import { View } from 'react-native';
import useKilometers from '../../utils/customHooks/useKilometers';
import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';
import KmDifferenceStatus from './KmDifferenceStatus';
import Udometer from './Udometer';

function UdometerArea() {
  const [startKm, setStartKm] = useKilometers('startKm');
  const [finishKm, setFinishKm] = useKilometers('finishKm');

  function updateKm(event, newNumber) {
    if (newNumber === NaN) return;
    if (event === 'startKm') {
      setStartKm(newNumber);
    }
    else if (event === 'finishKm') {
      setFinishKm(newNumber);
    }
  }

  return (
    <View style={BasicAreaStyle.container}>
      <Udometer name='startKm' updateKm={updateKm} km={startKm}/> 
      <KmDifferenceStatus start={startKm} finish={finishKm} />
      <Udometer name='finishKm' updateKm={updateKm} km={finishKm} />
    </View>
  );
}

export default UdometerArea;
