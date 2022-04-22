import { View, StyleSheet } from 'react-native';
import { useCountersStore } from '../../utils/stores/appStore';
import useKmStore from '../../utils/stores/kmStore';
// components
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import CounterButton from '../Buttons/CounterButton';

function Drawer() {
  const updateCounter = useCountersStore((state) => state.updateCounter);
  const counters = useCountersStore((state) => state.counters);

  const startKm = useKmStore((state) => state.kilometers.startKm);
  const finishKm = useKmStore((state) => state.kilometers.finishKm);
  const updateFinishKm = useKmStore((state) => state.updateKm);
  const updateStartKm = useKmStore((state) => state.updateKm);

  function reset() {
    ResetZeroCounters(counters, updateCounter);
  }

  function swapKms() {
    updateFinishKm('finishKm', startKm);
    updateStartKm('startKm', finishKm);
  }

  return (
    <View style={styles.container}>
      <CounterButton name="swap Kms" press={swapKms} />
      <CounterButton name="Clear Counters" press={reset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
});

export default Drawer;
