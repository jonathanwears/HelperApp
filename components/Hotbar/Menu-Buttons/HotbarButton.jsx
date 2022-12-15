import { Pressable, Image, StyleSheet } from 'react-native';

function HotbarButton({ imgLink, onClick }) {
  return (
    <Pressable style={styles.container} onPress={onClick}>
      <Image style={styles.img} source={imgLink} tintColor="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 30,
    height: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default HotbarButton;
