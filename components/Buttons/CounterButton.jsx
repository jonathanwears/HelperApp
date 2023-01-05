/* eslint-disable no-use-before-define */
import { Pressable, Text, StyleSheet } from 'react-native';

function CounterButton({ press, Icon }) {
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
        {Icon}
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

export default CounterButton;
