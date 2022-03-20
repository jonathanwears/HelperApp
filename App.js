import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea/CountersArea'
import UdometerArea from './components/Udometer/UdometerArea';
import Hotbar from './components/Hotbar/Hotbar';
import { useCountersStore } from './utils/appStore';
import { useEffect } from 'react';

export default function App() {
const syncCounters = useCountersStore(state => state.syncCounters)
useEffect(() => {
syncCounters()
},[])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <StatusBar style="auto" />
        <UdometerArea />
        <CountersArea />
        <Hotbar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
});
