import { View, Text } from 'react-native';
import { increment, decrement } from '../../../utils/MathsOperations';
import TitleCounter from './TitleCounter';
import CounterButton from '../../Buttons/CounterButton';
import { useCountersStore } from '../../../utils/stores/appStore';
// styles
import CounterTextStyle from '../../../utils/Styles/CounterTextStyle';
import CounterStyle from '../../../utils/Styles/CounterStyle';

function Counter({ counterName }) {
  const counter = useCountersStore((state) => state.counters[counterName]);
  const updateCounter = useCountersStore((state) => state.updateCounter);

  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={counterName} />
      <CounterButton name="Up" press={() => updateCounter(counterName, increment(counter))} />
      <Text style={CounterTextStyle.text}>{counter || 0}</Text>
      <CounterButton name="Down" press={() => updateCounter(counterName, decrement(counter))} />
    </View>
  );
}

export default Counter;
