import React from "react"
import { View,Text, Button  } from 'react-native';
import { Globalstyles } from "../styles/global"; 

export default function Studentdetails(){

    return (
     
       
        <View>
            <Text style={Globalstyles.headertxt}> Welcome Student Details</Text>
            
            <Button title = 'test' color='coral'/>
        </View>

     
    );
}