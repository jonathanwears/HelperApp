import { View, StyleSheet } from 'react-native';
import Counter from './Counter/Counter';
import { counterNames } from '../../utils/appStore';
import BasicAreaStyle from '../../utils/Styles/BasicAreaStyle';
import Title from '../../utils/Styles/Title';

function CountersArea() {
  const COUNTER_NAME = 'Counters';

  function counter() {
    // eslint-disable-next-line max-len
    return counterNames.map((counterName) => <Counter key={counterName} counterName={counterName} />);
  }

  return (
    <View style={styles.container}>
      <View>
        <Title name={COUNTER_NAME} />
      </View>
      <View style={BasicAreaStyle.container}>
        {counter()}
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
    marginBottom: 80,
  },
});

export default CountersArea;
