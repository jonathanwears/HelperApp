import React from 'react';
import { View, StyleSheet } from 'react-native';
import KmInput from './KmInput';
import useKilometers from '../../utils/customHooks/useKilometers';
import TitleCounter from '../Counter/TitleCounter';

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
    <View style={styles.container}>
      <TitleCounter />
      <KmInput name='startKm' updateKm={updateKm} km={startKm} />
      <KmInput name='finishKm' updateKm={updateKm} km={finishKm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2a2727',
    padding: 10,
    margin: 2,
  }
});

export default Udometer;
