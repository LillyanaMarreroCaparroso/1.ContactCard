import { StyleSheet, Text, View} from 'react-native';
import TopComponent from './components/TopComponent';
import BottomComponent from './components/BottomComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <TopComponent />
      <BottomComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1ddd5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
