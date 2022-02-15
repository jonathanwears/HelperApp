import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea';
import Udometer from './components/Udometer/Udometer';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Udometer />
      {/* <CountersArea /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

