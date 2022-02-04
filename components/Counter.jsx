import react, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import { saveData, getData } from '../utils/index';

function Counter({ entry }) {
  const isInitalMount = useRef(true);
  const [totalNum, setTotalNum] = useState(0);


  useEffect((entry) => {
    async function fetchData() {
      const fetchData = await getData(entry);
      setTotalNum(fetchData);
    }
  }, [])

  // SaveData useEffect
  useEffect((entry, totalNum) => {
    //stop save call on mounting 
    if (isInitalMount.current === true) {
       isInitalMount.current = false
    } else {
      async function saveData() {
        const getData = await saveData(entry, totalNum)
      }
    }
  }, [totalNum])

  function increment(event) {

    let num = 0;

    switch (event) {
      case '+': num = totalNum + 1;
        break
      case '-': num = totalNum - 1;
        break
      default: Alert.alert('outside switch\'s operation + , - ')
    }

    if (num < 0) { return };
    setTotalNum(num);
    // check if new total is less than 0 then set state.
  }

  return (
    <View style={styles.container}>
      <Button title={`${entry} + 1`} onPress={() => increment('+')} />
      <Text style={styles.text}>{totalNum}</Text>
      <Button title={`${entry} - 1`} onPress={() => increment('-')} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 25,
    width: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  }
});


export default Counter;