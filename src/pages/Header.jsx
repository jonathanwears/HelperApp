import { View, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 80,
    padding: 35,
    paddingBottom: 25,
    borderBottomLeftRadius: 5,
    borderBottomEndRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Header;
