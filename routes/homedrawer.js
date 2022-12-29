import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Addstudent from '../screens/addstudent';
import Studentdetails from '../screens/studentdetails';

const Drawer = createDrawerNavigator();



export default function HomeDrawerNavigator() {
    return (
      <NavigationContainer>
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
                                                                  
          <Drawer.Screen name='Home' component={Home} options={{ title: 'welcome' }} />
          <Drawer.Screen name='AddStudent' component={Addstudent} options={{ title: 'Add a student' }} />
          <Drawer.Screen name='StudentDetails' component={Studentdetails} options={{ title: 'The Student details' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  