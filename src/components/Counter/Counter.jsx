import { View, Text } from 'react-native';
import { useCountersStore } from '../../utils/stores/appStore';
import { increment, decrement } from '../../utils/Maths';
import TitleCounter from './TitleCounter';
import CounterButton from '../Buttons/CounterButton';
import PlusUpCounterIcon from '../../utils/Styles/PlusUpCounterIcon';
import MinusDownCounterIcon from '../../utils/Styles/MinusDownCounterIcon';
// styles
import CounterTextStyle from '../../utils/Styles/CounterTextStyle';
import CounterStyle from '../../utils/Styles/CounterStyle';

function Counter({ counterName }) {
  const counter = useCountersStore((state) => state.counters[counterName]);
  const updateCounter = useCountersStore((state) => state.updateCounter);

  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={counterName} />
      <CounterButton
        Icon={<PlusUpCounterIcon />}
        press={() => updateCounter(counterName, increment(counter))}
      />
      <Text style={CounterTextStyle.text}>{counter}</Text>
      <CounterButton
        Icon={<MinusDownCounterIcon />}
        press={() => updateCounter(counterName, decrement(counter))}
      />
    </View>
  );
}

export default Counter;
