import { View, Text } from 'react-native';
import TitleCounter from "./TitleCounter";
import CustomButton from '../../Buttons/CustomButton';
import CounterTextStyle from "../../../utils/Styles/CounterTextStyle";
import CounterStyle from "../../../utils/Styles/CounterStyle";
import { useCountersStore } from '../../../utils/appStore';

function Counter({ counterName }) {

  const counter = useCountersStore(state => state.counters[counterName])
  const updateCounter = useCountersStore(state => state.updateCounter)

  return (
    <View style={CounterStyle.container}>
      <TitleCounter counterName={counterName} />
      <CustomButton name={'Up'} onPress={() => updateCounter(counterName, counter + 1)} />
      <Text style={CounterTextStyle.text}>{counter}</Text>
      <CustomButton name={'Down'} onPress={() => updateCounter(counterName, Math.max(0, counter - 1))} />
    </View>
  );
}

export default Counter;
