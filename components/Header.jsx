import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ResetZeroCounters from './CountersArea/ResetZeroCounters';
import { useCountersStore } from '../utils/appStore';

function Header() {
  const updateCounter = useCountersStore(state => state.updateCounter);
  const counters = useCountersStore((state) => state.counters);

  function reset() {
    ResetZeroCounters(counters, updateCounter)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helper App</Text>
      <Button title="hello" onPress={reset}></Button>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 170,
    padding: 35,
    paddingBottom: 25,
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  }
});

export default Header;
