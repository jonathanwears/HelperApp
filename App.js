import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea';
import Udometer from './components/Udometer/Udometer';

export default function App() {
  
  return (
    <ScrollView>
       <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Udometer />
      <CountersArea />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
