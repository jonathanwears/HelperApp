import React from 'react';
import { View } from 'react-native';
import KmInput from './KmInput';
import useKilometers from '../../utils/customHooks/useKilometers';
import TitleCounter from '../Counter/TitleCounter';
import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';

function Udometer() {
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
      <TitleCounter />
      <KmInput name='startKm' updateKm={updateKm} km={startKm} />
      <KmInput name='finishKm' updateKm={updateKm} km={finishKm} />
    </View>
  );
}

export default Udometer;
