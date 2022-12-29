import React from "react"
import { View,Text, Button, ImageBackground } from 'react-native';
import { Globalstyles } from "../styles/global"; 



export default function Home(){
    
    return (
     
        <ImageBackground source = {require ('../assets/bgrd.jpg')} style={Globalstyles.imgback}>
            <View>
                <Text style={Globalstyles.headertxt}> Welcome Homee</Text>
                   
                <Button title = 'test' color='coral'/>
            </View>
        </ImageBackground> 
     
    );
}
