import { View } from 'react-native';
import KmInput from './KmInput';
import TitleCounter from '../CountersArea/Counter/TitleCounter';
import CounterStyle from '../../utils/Styles/CounterStyle';
import useKmStore from '../../utils/stores/kmStore';

function Udometer({ name, syncName }) {
  const km = useKmStore((state) => state.kilometers[syncName]);
  const updateKm = useKmStore((state) => state.updateKm);

  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={name} />
      <KmInput name={syncName} updateKm={updateKm} km={km} />
    </View>
  );
}

export default Udometer;
