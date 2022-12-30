import React from "react"
import { View,Text, Button  } from 'react-native';
import { Globalstyles } from "../styles/global"; 
import Card from "../shared/card";

export default function Studentdetails(){

    return (
     
       <Card>
        <View>
            <Text style={Globalstyles.headertxt}> Welcome Student Details</Text>

            
            <Button title = 'test' color='coral'/>
        </View>

       </Card>
     
    );
}