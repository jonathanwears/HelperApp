import React from 'react';
import { View, StyleSheet } from 'react-native';
import useKilometers from '../../utils/customHooks/useKilometers';
import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';
import Title from '../../utils/Styles/Title';
import KmDifferenceStatus from './KmDifferenceStatus';
import Udometer from './Udometer';

function UdometerArea() {
  const [startKm, setStartKm] = useKilometers('startKm');
  const [finishKm, setFinishKm] = useKilometers('finishKm');

  const UDO_COUNTER_NAME_1 = 'Start';
  const UDO_COUNTER_NAME_2 = 'Finish';
  const UDO_NAME = 'Kilometres';

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
      <View>
        <Title name={UDO_NAME}/>
      </View>
      <View style={BasicAreaStyle.container}>
        <Udometer name={UDO_COUNTER_NAME_1} updateKm={updateKm} km={startKm} />
        <KmDifferenceStatus start={startKm} finish={finishKm} />
        <Udometer name={UDO_COUNTER_NAME_2} updateKm={updateKm} km={finishKm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection :'column',
    backgroundColor: '#262626',
    marginTop:10,
    borderRadius: 10,
  }
})
export default UdometerArea;
