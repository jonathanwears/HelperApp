import { View, StyleSheet } from 'react-native';
import { useCountersStore } from '../../utils/stores/appStore';
// components
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import CounterButton from '../Buttons/CounterButton';
import CopyToClipboard from '../../utils/CopyToClipboard';
import SwapKms from '../../utils/SwapKms';

function Drawer() {
  const updateCounter = useCountersStore((state) => state.updateCounter);
  const counters = useCountersStore((state) => state.counters);

  function reset() {
    ResetZeroCounters(counters, updateCounter);
  }

  function copy() {
    CopyToClipboard();
  }

  function a() {
    SwapKms();
  }
  return (
    <View style={styles.container}>
      <CounterButton name="swap Kms" press={a} />
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
