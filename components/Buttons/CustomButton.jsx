import React from 'react';
import { Pressable, Text, StyleSheet} from 'react-native';
function CustomButton({ name }) {

  return (
      <Pressable  
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
    padding: 5,
    width: 50,
    margin:2,
  },
  pressed: {
    backgroundColor: 'black',
  },
  text:{
    fontSize:15,
  }
});

export default CustomButton;
