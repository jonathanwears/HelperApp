import { View, Text } from 'react-native';
import { increment, decrement } from '../../../utils/Maths';
import TitleCounter from './TitleCounter';
import CounterButton from '../../Buttons/CounterButton';
import { useCountersStore } from '../../../utils/stores/appStore';
// styles
import CounterTextStyle from '../../../utils/Styles/CounterTextStyle';
import CounterStyle from '../../../utils/Styles/CounterStyle';

function Counter({ counterName }) {
  const counter = useCountersStore((state) => state.counters[counterName]);
  const updateCounter = useCountersStore((state) => state.updateCounter);

  function changeState(type) {
    if (type === 'increment') {
      updateCounter(counterName, increment(counter));
    } else if (type === 'decrement') {
      updateCounter(counterName, decrement(counter));
    }
  }

  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={counterName} />
      <CounterButton name="Up" press={() => changeState('increment')} />
      <Text style={CounterTextStyle.text}>{counter}</Text>
      <CounterButton name="Down" press={() => changeState('decrement')} />
    </View>
  );
}

export default Counter;
