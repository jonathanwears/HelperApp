import React from 'react';
import { Pressable, Text, StyleSheet} from 'react-native';
function CustomButton({ name, onPress }) {

  return (
      <Pressable  onPress={onPress}
      style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : '#baffc9'
          },
          styles.wrapper]}>
        <Text style={styles.text}>
        {name}
      </Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    margin:2,
    width: 100,
  },
  pressed: {
    backgroundColor: 'black',
  },
  text:{
    fontSize:20,
  }
});

export default CustomButton;
