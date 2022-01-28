import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { getEnvironmentData } from 'worker_threads';

async function getData(name) {
  try {
    const nameValue = await AsyncStorage.getItem(name);
  }
  catch (error) {
    Alert.alert('failed to getdata');
  }

}

export default getData;
