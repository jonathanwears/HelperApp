import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function Hotbar({ drawer }) {

  return (
    <View style={styles.container}>
      <Button title='hello' onPress={() => drawer.current.openDrawer()}></Button>
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
