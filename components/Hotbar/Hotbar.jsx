import { StyleSheet, View } from 'react-native';
import CounterButton from '../Buttons/CounterButton';

function Hotbar({ drawer }) {
  const press = () => drawer.current.openDrawer();
  return (
    <View style={styles.container}>
      <CounterButton name="Open Options" press={press} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: '10%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    opacity: 0.9,
  },
});

export default Hotbar;
