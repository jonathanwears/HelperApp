import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CounterTextStyle from '../../utils/Styles/CounterTextStyle';
import CounterStyle from '../../utils/Styles/CounterStyle';

function KmDifferenceStatus({ start, finish }) {
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const kmDiffernece = finish - start;
    setDifference(kmDiffernece);
  }, [start, finish]);

  return (
    <View  style={styles.container}>
      <Text style={CounterTextStyle.text}>{difference}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#b8cfec',
    borderRadius: 5,
    width: 100,
    margin: 2,
    paddingTop: 0,
    paddingBottom: 2,
  }
});

export default KmDifferenceStatus;