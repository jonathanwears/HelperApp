/* eslint-disable no-use-before-define */
import { Pressable, Text, StyleSheet } from 'react-native';
import PlusUpCounterIcon from '../../utils/Styles/PlusUpCounterIcon';
import MinusDownCounterIcon from '../../utils/Styles/MinusDownCounterIcon';

function CustomButton({ name, press }) {
  // accepts a button name and the onpress function
  function nameValue() {
    switch (name) {
      case 'Up': return <PlusUpCounterIcon />;
      case 'Down': return <MinusDownCounterIcon />;
      default: return name;
    }
  }

  return (
    <Pressable
      onPress={press}
      hitSlop={10}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#d2e6ff' : '#82b1ed',
        },
        styles.wrapper,
      ]}
    >
      <Text>
        {nameValue()}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 4,
    height: 50,
    width: 110,
  },
});

export default CustomButton;
