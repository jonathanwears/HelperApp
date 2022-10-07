import { unstable_batchedUpdates } from 'react-native';
import useKmStore from './stores/kmStore';

function SwapKms() {
  const { startKm, finishKm } = useKmStore.getState().kilometers;
  // unstable_batchedUpdates required by zustand to do outside component actions;
  unstable_batchedUpdates(() => {
    useKmStore.getState().updateKm('finishKm', startKm);
    useKmStore.getState().updateKm('startKm', finishKm);
  });
}

export default SwapKms;
