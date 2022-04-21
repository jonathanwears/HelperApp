import { Text, StyleSheet, View } from 'react-native';

function TitleCounter({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9cbce6',
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default TitleCounter;
