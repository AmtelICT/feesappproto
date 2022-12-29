import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import SignUp from './screens/signup';
import Home from './screens/home';


export default function App()

{
    const Stack = createNativeStackNavigator();

    return (

      
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}  options={{ title: 'Login' }} />
          <Stack.Screen name="Home" component={Home}  options={{ title: 'Home' }} />
          <Stack.Screen name="SignUp" component={SignUp}  options={{ title: 'SignUp' }} />
        </Stack.Navigator>
    </NavigationContainer>
     
    );
}