import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function ConfirmDialog({ closeModal, handlePress }, ref) {
  return (
    <View style={styles.container}>
      <Text> Do you really wish to clear all Counters?</Text>
      <View style={styles.ButtonContainer}>
        <Pressable style={styles.button} ref={ref} onPress={handlePress}>
          <Text>Yes</Text>
        </Pressable>
        <Pressable style={styles.button} ref={ref} onPress={() => { closeModal(false) }}>
          <Text>No</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8cfec',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 4,
    height: 50,
    width: 110,
    backgroundColor: '#82b1ed',
  },

});

export default React.forwardRef(ConfirmDialog);
