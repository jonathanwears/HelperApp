/* eslint-disable no-use-before-define */
import { Pressable, Text, StyleSheet } from 'react-native';

function HotbarButton({ name, press }) {
  // accepts a button name and the onpress function
  return (
    <Pressable
      onPress={press}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#d2e6ff' : '#82b1ed',
        },
        styles.wrapper,
      ]}
    >
      <Text>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default HotbarButton;
