import { View, StyleSheet } from 'react-native';

import BasicAreaStyle from '../utils/Styles/BasicAreaStyle';
import Title from '../utils/Styles/Title';
import KmDifferenceStatus from '../components/Udometer/KmDifferenceStatus';
import Udometer from '../components/Udometer/Udometer';

function UdometerArea() {
  const UDO_NAMES = {
    start: 'Start',
    syncStartName: 'startKm',
    syncFinishName: 'finishKm',
    finish: 'Finish',
    name: 'Kilometres',
  };

  return (
    <View style={styles.container}>
      <View>
        <Title name={UDO_NAMES.name} />
      </View>
      <View style={BasicAreaStyle.container}>

        <Udometer
          name={UDO_NAMES.start}
          syncName={UDO_NAMES.syncStartName}
        />

        <KmDifferenceStatus />

        <Udometer
          name={UDO_NAMES.finish}
          syncName={UDO_NAMES.syncFinishName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#2e2e2e',
  },
});

export default UdometerArea;
