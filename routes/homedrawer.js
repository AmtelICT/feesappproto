import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Addstudent from '../screens/addstudent';
import Studentdetails from '../screens/studentdetails';
import Studentlist from '../screens/studentlist';

const Drawer = createDrawerNavigator();



export default function HomeDrawerNavigator() {
    return (
      <NavigationContainer independent={true} >
        <Drawer.Navigator initialRouteName='Home' screenOptions={{
                                                                  gestureEnabled: true,
                                                                  headerStyle: {
                                                                  backgroundColor: '#101010'
                                                                  },
                                                                  headerTitleStyle: {
                                                                  fontWeight: 'bold'
                                                                  },
                                                                  headerTintColor: '#ffd700'
                                                              }} >
                                                                  
          <Drawer.Screen name='Home' component={Home} options={{ title: 'Home' }} />
          <Drawer.Screen name='AddStudent' component={Addstudent} options={{ title: 'Add student' }} />
          <Drawer.Screen name='StudentDetails' component={Studentdetails} options={{ title: 'Student details' }} />
          <Drawer.Screen name='Studentlist' component={Studentlist} options={{ title: 'Student list' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  