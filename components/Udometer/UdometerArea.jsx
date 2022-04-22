import { View, StyleSheet } from 'react-native';

import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';
import Title from '../../utils/Styles/Title';
import KmDifferenceStatus from './KmDifferenceStatus';
import Udometer from './Udometer';

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
    backgroundColor: '#262626',
    marginTop: 10,
    borderRadius: 10,
  },
});

export default UdometerArea;
