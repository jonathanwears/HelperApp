/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-props-no-spreading */
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';
import { useEffect, useRef } from 'react';
import { useCountersStore } from './utils/appStore';
// components
import Header from './components/Header';
import CountersArea from './components/CountersArea/CountersArea';
import UdometerArea from './components/Udometer/UdometerArea';
import Hotbar from './components/Hotbar/Hotbar';
import Drawer from './components/Drawer/Drawer';

export default function App() {
  const drawer = useRef(null);

  const syncCounters = useCountersStore((state) => state.syncCounters);

  useEffect(() => {
    syncCounters();
  }, []);

  const DrawerLayoutAndroidProps = {
    drawerBackgroundColor: '#151515',
    drawerWidth: 200,
  };

  return (
    <DrawerLayoutAndroid
      {...DrawerLayoutAndroidProps}
      ref={drawer}
      renderNavigationView={() => <Drawer />}
    >
      <View style={styles.container}>
        <ScrollView>
          <StatusBar style="auto" />
          <Header />
          <UdometerArea />
          <CountersArea />
        </ScrollView>
        <Hotbar drawer={drawer} />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
