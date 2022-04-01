import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import PlusUpCounterIcon from '../../utils/Styles/PlusUpCounterIcon';
import MinusDownCounterIcon from '../../utils/Styles/MinusDownCounterIcon';

function CustomButton({ name, press }) {
// accepts a button name and the onpress function
  return (
    <Pressable onPress={press}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? '#d2e6ff'
            : '#82b1ed',
        },
        styles.wrapper]}>
      <Text>
        {name === 'Up' && <PlusUpCounterIcon />}
        {name === 'Down' && <MinusDownCounterIcon />}
        {name != 'Up' && name != 'Down' && `${name}`}
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
});

export default CustomButton;
