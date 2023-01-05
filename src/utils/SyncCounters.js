/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterNames from './CountersList';

async function syncCounters(counter) {
  let data = await AsyncStorage.getItem(counter);
  if (data === null) data = 0;
  return data;
}

function setCounters(counts) {
  const countersObj = counts.reduce((prevValue, currentValue) => {
    const obj = {
      ...prevValue,
      [currentValue[0]]: currentValue[1],
    };
    return obj;
  }, 0);
  return countersObj;
}

async function getCounters() {
  const counters = [];
  for (const counter of counterNames) {
    await syncCounters(counter).then((value) => {
      counters.push([counter, value]);
    });
  }
  return counters;
}

async function SyncCounters() {
  const createCounters = await getCounters(counterNames);
  const a = await setCounters(createCounters);
  return a;
}

export default SyncCounters;
