import { View, StyleSheet } from 'react-native';
import useKilometers from '../../utils/customHooks/useKilometers';
import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';
import Title from '../../utils/Styles/Title';
import KmDifferenceStatus from './KmDifferenceStatus';
import Udometer from './Udometer';
import CounterButton from '../Buttons/CounterButton';

function UdometerArea() {
  const [startKm, setStartKm] = useKilometers('startKm');
  const [finishKm, setFinishKm] = useKilometers('finishKm');

  function newDayKmValues() {
    if (finishKm === 0) return;
    setStartKm(finishKm);
    setFinishKm(0);
  }

  const UDO_NAMES = {
    start: 'Start',
    finish: 'Finish',
    name: 'Kilometres',
  };

  function updateKm(event, newNumber) {
    if (newNumber.isNaN) return;
    if (event === UDO_NAMES.start) {
      setStartKm(newNumber);
    } else if (event === UDO_NAMES.finish) {
      setFinishKm(newNumber);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Title name={UDO_NAMES.name} />
      </View>
      <View style={BasicAreaStyle.container}>

        <Udometer
          name={UDO_NAMES.start}
          updateKm={updateKm}
          km={startKm}
        />

        <KmDifferenceStatus
          start={startKm}
          finish={finishKm}
        />

        <Udometer
          name={UDO_NAMES.finish}
          updateKm={updateKm}
          km={finishKm}
        />
        <CounterButton name="Set new Day Values" press={newDayKmValues} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#262626',
    marginTop: 10,
    borderRadius: 10,
  },
});

export default UdometerArea;
