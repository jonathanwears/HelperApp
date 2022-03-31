import { StyleSheet, View, ScrollView, StatusBar, DrawerLayoutAndroid, Button } from 'react-native';
import Header from './components/Header';
import CountersArea from './components/CountersArea/CountersArea'
import UdometerArea from './components/Udometer/UdometerArea';
import Hotbar from './components/Hotbar/Hotbar';
import { useCountersStore } from './utils/appStore';
import { useEffect, useRef } from 'react';


export default function App() {
  const syncCounters = useCountersStore(state => state.syncCounters)
  useEffect(() => {
    syncCounters()
  }, [])

  const drawer = useRef(null);
  const DrawerLayoutAndroidProps = {
    drawerBackgroundColor: '#262626',
    drawerWidth: 200
  }

  return (
    <DrawerLayoutAndroid {...DrawerLayoutAndroidProps} ref={drawer} renderNavigationView={() => null}>
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <StatusBar style="auto" />
          <UdometerArea />
          <CountersArea />
        </ScrollView>
        <Hotbar drawer={drawer}/>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingBottom: 10,
  },
});
