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
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'black',
    height: '10%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    opacity: .9,
  },
});

export default Hotbar;
