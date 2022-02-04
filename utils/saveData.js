import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveData(name, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  }catch (error) {
    console.log('savedata failure')
  }

}

export default saveData;