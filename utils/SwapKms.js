import useKmStore from './stores/kmStore';

function SwapKms() {
  const { startKm, finishKm } = useKmStore.getState().kilometers;

  useKmStore.setState({
    kilometers: {
      startKm: finishKm,
      finishKm: startKm,
    },
  });
}

export default SwapKms;
