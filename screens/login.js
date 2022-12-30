import React from "react"
import { View,Text, Button  } from 'react-native';
import { Globalstyles } from "../styles/global"; 
import Card from "../shared/card";


export default function Login(props){
 const {navigation} =props;
    return (
     
       <Card>
        <View>
            <Text style={Globalstyles.headertxt}> Welcome to Login</Text>

            <Button title = 'Login' color='coral' onPress={()=> navigation.navigate('Home')}/>
            <Button title = 'Dont hv account? SignUp' color='coral' onPress={()=> navigation.navigate('SignUp')}/>
        </View>
      </Card>
     
    );
}