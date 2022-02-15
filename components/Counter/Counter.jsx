import react, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Button, Text } from 'react-native';
import { saveData, getData } from '../../utils/index';
import TitleCounter from "./TitleCounter";

function Counter({ entry }) {
  const isInitalMount = useRef(true);
  const [totalNum, setTotalNum] = useState();

  useEffect(() => {
    async function fetchData() {
      const fetchData = await getData(String(entry));
      setTotalNum(Number(fetchData));
    }
    fetchData();
  }, [])

  // SaveData useEffect
  useEffect(() => {
    //stop save call on mounting 
    if (isInitalMount.current === true) {
      console.log("called from initialmount")
      isInitalMount.current = false
    } else {
      async function saveNewValue() {
        const getData = await saveData(String(entry), totalNum)
      }
      setTimeout(saveNewValue, 1000);
    }
  }, [totalNum])

  function increment(event) {

    let newCounterNum = 0;

    switch (event) {
      case '+': newCounterNum = totalNum + 1;
        break
      case '-': newCounterNum = totalNum - 1;
        break
      default: console.log('outside switch\'s operation + , - ')
    }

    if (newCounterNum < 0) { return };
    setTotalNum(newCounterNum);
    // check if new total is less than 0 then set state.
  }

  return (
    <View style={styles.container}>
      <TitleCounter entry={entry} />
      <Button title={'up'} onPress={() => increment('+')} />
      <Text style={styles.text}>{totalNum}</Text>
      <Button title={'down'} onPress={() => increment('-')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: 'yellow',
    borderRadius: 5,
    width: 100,
    margin: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Counter;
