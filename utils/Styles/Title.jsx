import { StyleSheet, Text } from 'react-native';

function Title({ name }) {
  return (
    <Text style={styles.text}>{name}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: 'white',
    paddingLeft: 15,
    paddingTop: 10,
  },
});

export default Title;
