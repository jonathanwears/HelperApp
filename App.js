import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea';
import Udometer from './components/Udometer/Udometer';
import Hotbar from './components/Hotbar/Hotbar';

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <StatusBar style="auto" />
        <Udometer />
        <CountersArea />
        <Hotbar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    position: 'relative',
  },
});
