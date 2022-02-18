import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea';
import Udometer from './components/Udometer/Udometer';

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <StatusBar style="auto" />
        <Udometer />
        <CountersArea />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
