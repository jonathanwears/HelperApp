import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useKmStore = create((set) => ({
  kilometers: {
    startKm: 0,
    finishKm: 0,
  },

  syncKm: async () => {
    const syncStartKm = await AsyncStorage.getItem('startKm');
    const syncFinishKm = await AsyncStorage.getItem('finishKm');

    set({
      kilometers: {
        startKm: syncStartKm,
        finishKm: syncFinishKm,
      },
    });
  },

  updateKm: (name, value) => {
    AsyncStorage.setItem(name, value.toString());
    set(({ kilometers }) => ({
      kilometers: {
        ...kilometers,
        [name]: value,
      },
    }));
  },
}));

export default useKmStore;
