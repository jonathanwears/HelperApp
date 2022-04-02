/* eslint-disable react/jsx-no-bind */
import { View } from 'react-native';
import { useCountersStore } from '../../utils/appStore';
// components
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import CounterButton from '../Buttons/CounterButton';

function Drawer() {
  const updateCounter = useCountersStore((state) => state.updateCounter);
  const counters = useCountersStore((state) => state.counters);

  function reset() {
    ResetZeroCounters(counters, updateCounter);
  }

  return (
    <View>
      <CounterButton name="biscuits" press={reset} />
    </View>
  );
}

export default Drawer;
