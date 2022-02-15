import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { saveData, getData } from '../../utils/index';
import KmInput from './KmInput';
import useKilometers from '../../utils/customHooks/useKilometers';

function Udometer() {

  const [startKm, setStartKm] = useKilometers('startKm');
  const [finishKm, setFinishKm] = useKilometers('finishKm');
  // const [finishKm, setFinishKm] = useState(0);
  // const isInitialMount = useRef(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     const fetchDataStart = await getData('startKm');
  //     const fetchDataFinish = await getData('finishKm')
  //     setStartKm(fetchDataStart);
  //     setFinishKm(fetchDataFinish);
  //   }
  //   fetchData();
  // }, []);



  // // SaveData useEffect
  // useEffect(() => {
  //   //stop save call on mounting 
  //   if (isInitialMount.current === true) {
  //     isInitialMount.current = false
  //   } else {
  //     const startKmInt = Number(startKm)
  //     async function saveNewValue() {
  //       const getData = await saveData('startKm', startKmInt)
  //     }
  //     setTimeout(saveNewValue, 1000);
  //   }
  // }, [startKm])

  // useEffect(() => {
  //   //stop save call on mounting 
  //   if (isInitialMount.current === true) {
  //     isInitialMount.current = false
  //   } else {
  //     const finishKmInt = Number(finishKm)
  //     async function saveNewValue() {
  //       const getData = await saveData('finishKm', finishKmInt)
  //     }
  //     setTimeout(saveNewValue, 1000);
  //   }
  // }, [finishKm])

  function updateKm(event, newNumber) {
    if (newNumber === NaN) return;
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
      <KmInput name='finishKm' updateKm={updateKm} km={finishKm} />
    </View>
  );
}

export default Udometer;
