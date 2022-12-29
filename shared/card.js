import React from "react"
import { View,Text, ImageBackground, Button , } from 'react-native';
import { Globalstyles } from "../styles/global"; 

export default function Card(props){

    return (
     
       
        <View>
            <Text style={Globalstyles.headertxt}> Welcome Home</Text>

            <Button title = 'test' color='coral'/>
        </View>

    )
}
