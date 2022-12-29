
import { StyleSheet, Text, View , ImageBackground} from 'react-native';

import HomeDrawerNavigator from './routes/homedrawer';

import { Globalstyles } from './styles/global';

export default function App() {
  return (
          <HomeDrawerNavigator/>
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
