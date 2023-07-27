import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.appArea}>
        <Text style={styles.heading}>Welcome</Text>
        <Input />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccc',
    // justifyContent: 'center',
  },
  appArea: {
    width: '80%',
    marginTop: 60,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center'
  }

});
