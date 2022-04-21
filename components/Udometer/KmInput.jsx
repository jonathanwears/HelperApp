import { TextInput } from 'react-native';
import CounterTextStyle from '../../utils/Styles/CounterTextStyle';

function KmInput({ name, updateKm, km }) {
  function updateKmNum(event) {
    updateKm(name, event);
  }

  return (
    <TextInput
      style={CounterTextStyle.text}
      onChangeText={updateKmNum}
      keyboardType="number-pad"
    >
      {km || 0}
    </TextInput>
  );
}

export default KmInput;
