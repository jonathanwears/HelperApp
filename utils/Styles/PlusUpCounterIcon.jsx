import React from 'react';
import { Image, StyleSheet } from 'react-native';
import plus from '../../assets/icons/plus.png';

function PlusUpCounterIcon() {
  return (
    <Image style={styles.container} source={plus} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: 10,
    padding: 5,
    backgroundColor: 'blue',
  }
});

export default PlusUpCounterIcon;
