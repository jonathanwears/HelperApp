import { View, StyleSheet } from 'react-native';
import useKmStore from '../../utils/stores/kmStore';
import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';
import Title from '../../utils/Styles/Title';
import KmDifferenceStatus from './KmDifferenceStatus';
import Udometer from './Udometer';
import CounterButton from '../Buttons/CounterButton';

function UdometerArea() {
  const startKm = useKmStore((state) => state.kilometers.startKm);
  const finishKm = useKmStore((state) => state.kilometers.finishKm);
  const updateFinishKm = useKmStore((state) => state.updateKm);
  const updateStartKm = useKmStore((state) => state.updateKm);

  function swapKms() {
    if (finishKm === 0) return;
    updateFinishKm('finishKm', startKm);
    updateStartKm('startKm', finishKm);
  }

  const UDO_NAMES = {
    start: 'Start',
    syncStartName: 'startKm',
    syncFinishName: 'finishKm',
    finish: 'Finish',
    name: 'Kilometres',
  };

  return (
    <View style={styles.container}>
      <View>
        <Title name={UDO_NAMES.name} />
      </View>
      <View style={BasicAreaStyle.container}>

        <Udometer
          name={UDO_NAMES.start}
          syncName={UDO_NAMES.syncStartName}
        />

        <KmDifferenceStatus />

        <Udometer
          name={UDO_NAMES.finish}
          syncName={UDO_NAMES.syncFinishName}
        />
        <CounterButton name="Set new Day Values" press={swapKms} />
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
