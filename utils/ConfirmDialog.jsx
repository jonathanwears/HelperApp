import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

function ConfirmDialog({ closeModal, handlePress }, ref) {
  return (
    <View style={styles.container}>
      <Text> Do you really wish to clear all Counters?</Text>
      <View style={styles.ButtonContainer}>
        <Button ref={ref} title="Yes" onPress={handlePress} />
        <Button title="No" onPress={() => { closeModal(false) }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
});

export default React.forwardRef(ConfirmDialog);
