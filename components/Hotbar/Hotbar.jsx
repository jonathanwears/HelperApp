import React from 'react';
import { StyleSheet, View } from 'react-native';

function Hotbar() {

  return (
    <View style={styles.container}>

    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 50,
    bottom: 0,
    position: 'absolute',
  },
});

export default Hotbar;
