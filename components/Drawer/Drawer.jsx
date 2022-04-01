import React from 'react';
import { View, Text } from 'react-native';
import { useCountersStore } from '../../utils/appStore';
//components
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import CustomButton from '../Buttons/CustomButton';

function Drawer() {

  const updateCounter = useCountersStore(state => state.updateCounter);
  const counters = useCountersStore((state) => state.counters);

  function reset() {
    ResetZeroCounters(counters, updateCounter)
  }

  return (
    <View>
     <CustomButton name="biscuits" press={"w"} />      
     <Text name="hello" onPress={reset}>hello</Text>
    </View>
  )
}

export default Drawer;
