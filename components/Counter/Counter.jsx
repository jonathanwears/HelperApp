import react, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { saveData, getData } from '../../utils/index';
import TitleCounter from "./TitleCounter";
import CustomButton from "../Buttons/CustomButton";
import  CounterTextStyle  from "../../utils/Styles/CounterTextStyle";
import CounterStyle from "../../utils/Styles/CounterStyle";


function Counter({ entry }) {
  const isInitalMount = useRef(true);
  const [totalNum, setTotalNum] = useState();
  //fetch data
  useEffect(() => {
    async function fetchData() {
      const fetchData = await getData(String(entry));
      setTotalNum(Number(fetchData));
    }
    fetchData();
  }, [])

  // SaveData 
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


  // increment Buttons sends a + or - to function. 
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
    <View style={CounterStyle.container}>
      <TitleCounter entry={entry} />
      <CustomButton name={'Up'} onPress={() => increment('+')} />
      <Text style={CounterTextStyle.text}>{totalNum}</Text>
      <CustomButton name={'Down'} onPress={() => increment('-')} />
    </View>
  );
}

export default Counter;
