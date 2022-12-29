import React from "react"
import { View,Text, Button  } from 'react-native';
import { Globalstyles } from "../styles/global"; 

export default function SignUp(){

    return (
     
       
        <View>
            <Text style={Globalstyles.headertxt}> SignUp</Text>

            <Button title = 'test' color='coral'/>
        </View>

     
    );
}
