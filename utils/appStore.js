import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const counterNames = [
  "Redeployed",
  "Collected",
  "Deployed",
  "Can't find",
  "Cant reach"
]
function getInitialValues() {
  const [redeployed, collected, deployed, cantFind, cantReach] = counterNames;

  return {
    counters: {
      [redeployed]: 0,
      [collected]: 0,
      [deployed]: 0,
      [cantFind]: 0,
      [cantReach]: 0,
    }
  }
}

export const useCountersStore = create(set => ({
  ...getInitialValues(),

  syncCounters: async () => {
    const [redeployed, collected, deployed, cantFind, cantReach] = counterNames;

    const redeployedData = await AsyncStorage.getItem(redeployed);
    const collectedData = await AsyncStorage.getItem(collected);
    const deployedData = await AsyncStorage.getItem(deployed);
    const cantFindData = await AsyncStorage.getItem(cantFind);
    const cantReachData = await AsyncStorage.getItem(cantReach);

    set({
      counters: {
        [redeployed]: Number(redeployedData),
        [collected]: Number(collectedData),
        [deployed]: Number(deployedData),
        [cantFind]: Number(cantFindData),
        [cantReach]: Number(cantReachData),
      }
    })
  },

  updateCounter: (name, value) => {
    AsyncStorage.setItem(name, value.toString())

    set(({ counters }) => ({
      counters: {
        ...counters,
        [name]: value,
      }
    }))
  },
}))