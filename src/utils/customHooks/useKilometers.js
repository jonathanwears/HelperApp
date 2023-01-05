import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';

export default function usekilometers(name) {
  const [kilometer, setKilometer] = useState();
  // get data
  useEffect(() => {
    AsyncStorage.getItem(name).then((value) => setKilometer(Number(value)));
  }, []);

  // save data
  useDidUpdate(() => AsyncStorage.setItem(name, String(kilometer)), [kilometer]);
  // debounce value

  return [kilometer, setKilometer];
}
