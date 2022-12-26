import { useState, useRef } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { useCountersStore } from '../../utils/stores/appStore';
import HotbarButton from './Menu-Buttons/HotbarButton';
import ResetZeroCounters from '../CountersArea/ResetZeroCounters';
import bin from '../../assets/icons/bin.png';
import copy from '../../assets/icons/copy.png';
import swapImg from '../../assets/icons/swap.png';
import menu from '../../assets/icons/menu.png';
import CopyToClipboard from '../../utils/CopyToClipboard';
import SwapKms from '../../utils/SwapKms';
import ConfirmDialog from '../../utils/ConfirmDialog';

function Hotbar({ drawer }) {
  const [modalVisable, setModalVisable] = useState(false);
  const counters = useCountersStore((state) => state.counters);
  const updateCounter = useCountersStore((state) => state.updateCounter);
  // const press = () => drawer.current.openDrawer();

  function reset() {
    ResetZeroCounters(counters, updateCounter);
  }

  function copyValues() {
    CopyToClipboard();
  }

  function swap() {
    SwapKms();
  }

  const buttonRef = useRef(null);
  function handlePress() {
    reset();
    buttonRef.current = false;
    setModalVisable(false);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisable}
      >
        <View
          style={styles.modalView}
        >
          <ConfirmDialog ref={buttonRef} handlePress={handlePress} closeModal={setModalVisable} />
        </View>
      </Modal>

      <HotbarButton onClick={() => setModalVisable(true)} imgLink={bin} />
      {/* <HotbarButton onClick={press} imgLink={menu} /> */}
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
  modalView: {
    display: 'flex',
    alignSelf: 'center',
    margin: 75,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Hotbar;
