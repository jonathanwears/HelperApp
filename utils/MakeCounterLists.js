/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userCountersNames = ['biscuits'];

export async function getUserCountersList() {
  const countersFromStorage = await AsyncStorage.getItem('userCounters');
  if (countersFromStorage === null) return;
  const counters = JSON.parse(countersFromStorage);
  return counters;
}

export async function setUserCountersList() {
  const a = JSON.stringify(userCountersNames);
  await AsyncStorage.setItem('userCounters', a);
}
