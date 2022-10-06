import { StyleSheet, Text, View} from 'react-native';
import TopComponent from './components/TopComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <TopComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
