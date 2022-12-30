import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login';
import SignUp from '../screens/signup';
//import Home from '../screens/home';

import HomeTabs from './hometabs';
const Stack = createStackNavigator()

export default function LoginStackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login' screenOptions={{
                                                                gestureEnabled: true,
                                                                headerStyle: {
                                                                backgroundColor: '#101010'
                                                                },
                                                                headerTitleStyle: {
                                                                fontWeight: 'bold'
                                                                },
                                                                headerTintColor: '#ffd700'
                                                            }} >

        <Stack.Screen name='Login' component={Login} options={{ title: 'Login To Almumin ERP' }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ title: 'SignUp To Almumin ERP' }} />
        <Stack.Screen name='Home' component={HomeTabs}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

