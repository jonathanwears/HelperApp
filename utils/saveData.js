import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

async function saveData(name, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  }catch (error) {
    Alert.alert('savedata failure')
  }

}

export default saveData;
