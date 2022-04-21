import { View } from 'react-native';
import KmInput from './KmInput';
import TitleCounter from '../CountersArea/Counter/TitleCounter';
import CounterStyle from '../../utils/Styles/CounterStyle';
import useKmStore from '../../utils/stores/kmStore';

function Udometer({
  name,
  syncName,
  updateKm,
  km,
}) {
  console.log(syncName);
  const km1 = useKmStore((state) => state.kilometers[syncName]);
  const updateKm1 = useKmStore((state) => state.updateKm);
  console.log(updateKm1);
  return (
    <View style={CounterStyle.container}>
      <TitleCounter name={name} />
      <KmInput name={syncName} updateKm={updateKm1} km={km1} />
    </View>
  );
}

export default Udometer;
