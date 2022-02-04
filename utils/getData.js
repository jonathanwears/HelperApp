import AsyncStorage from '@react-native-async-storage/async-storage';

async function getData(name) {
  try {
    const nameValue = await AsyncStorage.getItem(name);
    if(nameValue === null) {
      console.log("getdata return 0");
      return 0; 
    } 
    else {
      return nameValue
    }
  }
  catch (error) {
    console.log('failed to getdata');
  }

}

export default getData;
