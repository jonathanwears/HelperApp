/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SyncCounters from '../SyncCounters';
import counterNames from '../CountersList';

function getInitialValues() {
  const countersObj = counterNames.reduce((prevValue, currentValue) => {
    const obj = {
      ...prevValue,
      [currentValue]: 0,
    };
    return obj;
  }, 0);

  const counters = {
    counters: {
      ...countersObj,
    },
  };
  return counters;
}

export const useCountersStore = create((set) => ({
  ...getInitialValues(),

  syncCounters: async () => {
    const syncedCounters = await SyncCounters(getInitialValues);

    set({
      counters: {
        ...syncedCounters,
      },
    });
  },

  updateCounter: (name, value) => {
    AsyncStorage.setItem(name, value.toString());
    set(({ counters }) => ({
      counters: {
        ...counters,
        [name]: value,
      },
    }));
  },
}));
