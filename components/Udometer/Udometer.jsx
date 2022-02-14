import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { saveData, getData } from '../../utils/index';
import KmInput from './KmInput';

function Udometer() {
  const [startKm, setStartKm] = useState();
  
  useEffect(() => {
    async function fetchData() {
      const fetchData = await getData('startKm');
      setStartKm(Number(fetchData));
    }
    fetchData();
  },[]);

  const [finishKm, setFinishKm] = useState(0);
  const isInitialMount = useRef(true);

  // SaveData useEffect
  useEffect(() => {
    //stop save call on mounting 
    if (isInitialMount.current === true) {
      isInitialMount.current = false
    } else {
      async function saveNewValue() {
     
        const getData = await saveData('startKm', startKm)
      }
      setTimeout(saveNewValue, 1000);
    }
  }, [startKm])

  function updateKm(event, newNumber) {
    if(newNumber === NaN) return; 
    if (event === 'startKm') {
    setStartKm(newNumber);
    }
    else if (event === 'finishKm') {
      setFinishKm(newNumber);
    }
  }

  return (
    <View>
      <KmInput name='startKm' updateKm={updateKm} km={startKm} />
      {/* <KmInput name='finishKm' updateKm={updateKm} km={finishKm} /> */}
    </View>
  );
}

//SaveData useEffect
export default Udometer;
