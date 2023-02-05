import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Payment from './screens/payment';
import Applications from './screens/applications';
import Appform from './screens/applicationform';

export default function App() {
  return (
    <View style={styles.container}>
      <Appform/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
