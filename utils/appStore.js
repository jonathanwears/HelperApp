/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SyncCounters from './SyncCounters';
import counterNames from './CountersList';

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
    // const [redeployed, collected, deployed, cantFind, cantReach] = counterNames;

    // const redeployedData = await AsyncStorage.getItem(redeployed);
    // const collectedData = await AsyncStorage.getItem(collected);
    // const deployedData = await AsyncStorage.getItem(deployed);
    // const cantFindData = await AsyncStorage.getItem(cantFind);
    // const cantReachData = await AsyncStorage.getItem(cantReach);

    // set({
    //   counters: {
    //     [redeployed]: Number(redeployedData),
    //     [collected]: Number(collectedData),
    //     [deployed]: Number(deployedData),
    //     [cantFind]: Number(cantFindData),
    //     [cantReach]: Number(cantReachData),
    //   },
    // });
    set({
      counters: {
        ...SyncCounters(getInitialValues),
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
