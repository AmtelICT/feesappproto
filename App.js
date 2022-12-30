
import { StyleSheet, Text, View , ImageBackground} from 'react-native';


import LoginStackNavigator from './routes/loginstack';
import { Globalstyles } from './styles/global';

export default function App() {
  return (
          <LoginStackNavigator/>
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
