import * as Clipboard from 'expo-clipboard';
import { useCountersStore } from './stores/appStore';
import useKmStore from './stores/kmStore';

function CopyToClipboard() {
  const { startKm, finishKm } = useKmStore.getState().kilometers;
  const { ...counters } = useCountersStore.getState().counters;
  const keys = Object.keys(counters);
  const values = Object.values(counters);
  const arrToClipboard = [];

  arrToClipboard.push(`Start Kilometres: ${startKm}\nFinish Kilometres: ${finishKm}`);
  keys.forEach((key, index) => arrToClipboard.push(`\n${key}: ${values[index]} `));
  const clipboardData = arrToClipboard.join('');
  Clipboard.setString(clipboardData);
}
export default CopyToClipboard;
