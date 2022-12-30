import React from "react"
import { View,Text, Button, ImageBackground } from 'react-native';
import { Globalstyles } from "../styles/global"; 
import Card from "../shared/card";

export default function Home(){
    
    return (
     
      <Card>
                <Text style={Globalstyles.headertxt}> Welcome Homee</Text>
                   
                <Button title = 'test' color='coral'/>
      </Card> 
    );
}
