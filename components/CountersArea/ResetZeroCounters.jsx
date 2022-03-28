import React from 'react';
import { Button } from 'react-native';
import { useCountersStore } from '../../utils/appStore';

function ResetZeroCounters() {

  const updateCounter = useCountersStore(state => state.updateCounter)
  const counters = useCountersStore((state) => state.counters);

  function reset() {
    const countersArr = Object.keys(counters);
    countersArr.forEach(counter => {
      updateCounter(counter, 0)
    });
  }

  return <Button title='clear' onPress={reset}></Button>
}

export default ResetZeroCounters;
