import { View, StyleSheet } from 'react-native';
import { useCountersStore } from '../../utils/stores/appStore';
import useKmStore from '../../utils/stores/kmStore';
// components
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import CounterButton from '../Buttons/CounterButton';
import CopyToClipboard from '../../utils/CopyToClipboard';

function Drawer() {
  const updateCounter = useCountersStore((state) => state.updateCounter);
  const counters = useCountersStore((state) => state.counters);

  const { startKm, finishKm } = useKmStore((state) => state.kilometers);
  const updateKm = useKmStore((state) => state.updateKm);
  const updateStartKm = useKmStore((state) => state.updateKm);

  function reset() {
    ResetZeroCounters(counters, updateCounter);
  }

  function swapKms() {
    updateKm('finishKm', startKm);
    updateKm('startKm', finishKm);
  }

  function copy() {
    CopyToClipboard();
  }

  return (
    <View style={styles.container}>
      <CounterButton name="swap Kms" press={swapKms} />
      <CounterButton name="Clear Counters" press={reset} />
      <CounterButton name="Copy data" press={copy} />
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
