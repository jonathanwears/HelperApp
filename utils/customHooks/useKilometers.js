import { useEffect, useState, useRef } from 'react';
import { getData, saveData } from '../index';

export default function usekilometers(name) {

  const [kilometer, setKilometer] = useState();
  const isInitialMount = useRef(true);

  // get data
  useEffect(() => {
    async function fetchData() {
      const fetchData = await getData(String(name));
      setKilometer(fetchData);
    }
    fetchData();
  }, []);

  //save data
  useEffect(() => {
    //stop save call on mounting 
    if (isInitialMount.current === true) {
      isInitialMount.current = false
    } else {
      const kmInt = Number(kilometer)
      async function saveNewValue() {
        const getData = await saveData(String(name), kmInt)
      }
      setTimeout(saveNewValue, 1000);
    }
  }, [kilometer])

  return [kilometer, setKilometer];
}
