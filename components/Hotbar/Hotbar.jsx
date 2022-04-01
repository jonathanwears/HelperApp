import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomButton from '../Buttons/CustomButton';
function Hotbar({ drawer }) {

  const press = () => drawer.current.openDrawer();
  return (
    <View style={styles.container}>
    <CustomButton name='Open Options' press={press} />
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
    height: '10%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    opacity: .9,
  },
});

export default Hotbar;
