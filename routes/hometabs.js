import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeDrawerNavigator from './homedrawer';
import StudentDrawerNavigator from './studentsdrawer';
const Tab = createBottomTabNavigator();


export default function HomeTabs() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeDrawerNavigator}  options={{headerShown: false}}/>
          <Tab.Screen name="Settings" component={StudentDrawerNavigator}  options={{headerShown: false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }