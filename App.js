import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea';

export default function App() {
  const title = 'Title';
  
  return (
    <View style={styles.container}>
      <Header title= {title} />
      <StatusBar style="auto" />
      <CountersArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

