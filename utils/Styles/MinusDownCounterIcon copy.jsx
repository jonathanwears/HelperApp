import React from 'react';
import { Image, StyleSheet } from 'react-native';
import minus from '../../assets/icons/minus.png';

function MinusDownCounterIcon() {
  return (
    <Image style={styles.container} source={minus} />
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

export default MinusDownCounterIcon;
