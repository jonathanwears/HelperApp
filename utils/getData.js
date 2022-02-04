import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

async function getData(name) {
  try {
    const nameValue = await AsyncStorage.getItem(name);
    if(nameValue === null) {return} 
  }
  catch (error) {
    Alert.alert('failed to getdata');
  }

}

export default getData;
