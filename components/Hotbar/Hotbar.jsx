import { StyleSheet, View } from 'react-native';
import { useCountersStore } from '../../utils/stores/appStore';
import CounterButton from '../Buttons/CounterButton';
import HotbarButton from './Menu-Buttons/HotbarButton';
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import bin from '../../assets/icons/bin.png';
import copy from '../../assets/icons/copy.png';
import swapImg from '../../assets/icons/swap.png';
import menu from '../../assets/icons/menu.png';
import CopyToClipboard from '../../utils/CopyToClipboard';
import SwapKms from '../../utils/SwapKms';

function Hotbar({ drawer }) {
  const counters = useCountersStore((state) => state.counters);
  const updateCounter = useCountersStore((state) => state.updateCounter);
  const press = () => drawer.current.openDrawer();

  function reset() {
    ResetZeroCounters(counters, updateCounter);
  }

  function copyValues() {
    CopyToClipboard();
  }

  function swap() {
    SwapKms();
  }

  return (
    <View style={styles.container}>
      <HotbarButton onClick={press} imgLink={menu} />
      <HotbarButton onClick={reset} imgLink={bin} />
      <HotbarButton onClick={copyValues} imgLink={copy} />
      <HotbarButton onClick={swap} imgLink={swapImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: '10%',
    width: '100%',
    bottom: 0,
    paddingLeft: '10%',
    paddingRight: '10%',
    position: 'absolute',
  },
});

export default Hotbar;
