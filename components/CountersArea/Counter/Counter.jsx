import { View, Text } from 'react-native';
import { increment, decrement } from '../../../utils/MathsOperations';
import TitleCounter from "./TitleCounter";
import CustomButton from '../../Buttons/CustomButton';
import { useCountersStore } from '../../../utils/appStore';
// styles
import CounterTextStyle from "../../../utils/Styles/CounterTextStyle";
import CounterStyle from "../../../utils/Styles/CounterStyle";

function Counter({ counterName }) {
  console.log(counterName)
  const counter = useCountersStore(state => state.counters[counterName])
  const updateCounter = useCountersStore(state => state.updateCounter)
 
  return (
    <View style={CounterStyle.container}>
      <TitleCounter entry={counterName} />
      <CustomButton name={'Up'} onPress={() => updateCounter(counterName, increment(counter))} />
      <Text style={CounterTextStyle.text}>{counter}</Text>
      <CustomButton name={'Down'} onPress={() => updateCounter(counterName, decrement(counter))} />
    </View>
  );
}

export default Counter;
