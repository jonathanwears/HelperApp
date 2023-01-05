/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/style-prop-object */
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';
import { useEffect, useRef } from 'react';
import { useCountersStore } from './src/utils/stores/appStore';
// components
import Header from './src/pages/Header';
import CountersArea from './src/pages/CountersArea';
import UdometerArea from './src/pages/UdometerArea';
import Hotbar from './src/components/Hotbar/Hotbar';
import Drawer from './src/components/Drawer/Drawer';
import useKmStore from './src/utils/stores/kmStore';

export default function App() {
  const drawer = useRef(null);

  const syncCounters = useCountersStore((state) => state.syncCounters);
  const syncKilometers = useKmStore((state) => state.syncKm);
  useEffect(() => {
    syncCounters();
    syncKilometers();
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
