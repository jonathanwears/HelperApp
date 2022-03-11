import { create } from 'zustand';

const useAppStore = create(set => ({
  deployed: 0,
  updateCounter: () => set(state => ({
    deployed: newCounterNumber,


  }))

}))