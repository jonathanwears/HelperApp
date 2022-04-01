import { View, Text } from 'react-native';
import { increment, decrement } from '../../../utils/MathsOperations';
import TitleCounter from "./TitleCounter";
import CustomButton from '../../Buttons/CustomButton';
import { useCountersStore } from '../../../utils/appStore';
// styles
import CounterTextStyle from "../../../utils/Styles/CounterTextStyle";
import CounterStyle from "../../../utils/Styles/CounterStyle";

function Counter({ counterName }) {
  const counter = useCountersStore(state => state.counters[counterName])
  const updateCounter = useCountersStore(state => state.updateCounter)
 
  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={counterName} />
      <CustomButton name={'Up'} press={() => updateCounter(counterName, increment(counter))} />
      <Text style={CounterTextStyle.text}>{counter}</Text>
      <CustomButton name={'Down'} press={() => updateCounter(counterName, decrement(counter))} />
    </View>
  );
}

export default Counter;