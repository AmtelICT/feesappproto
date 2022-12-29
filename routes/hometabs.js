import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Addstudent from '../screens/addstudent';

const Tab = createBottomTabNavigator();


export default function HomeTabs() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Addstudent} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }