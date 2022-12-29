import React from "react"
import { View,Text, Button  } from 'react-native';
import { Globalstyles } from "../styles/global"; 

export default function Addstudent(){

    return (
     
       
        <View>
            <Text style={Globalstyles.headertxt}> Welcome Adding Student</Text>
          
            <Button title = 'test' color='coral'/>
        </View>

     
    );
}