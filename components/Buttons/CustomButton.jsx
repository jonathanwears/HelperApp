import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import PlusUpCounterIcon from '../../utils/Styles/PlusUpCounterIcon';
import MinusDownCounterIcon from '../../utils/Styles/MinusDownCounterIcon';

function CustomButton({ name, onPress }) {

  return (
    <Pressable onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? '#d2e6ff'
            : '#82b1ed',
        },
        styles.wrapper]}>
      <Text style={styles.text}>
        {(name === 'Up') ? <PlusUpCounterIcon /> : <MinusDownCounterIcon />}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: 50,
    width: 100,
  },
  text: {
    height: 10,
    width: 10,
  }
});

export default CustomButton;
