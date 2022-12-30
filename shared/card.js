import React from "react"
import { View,Text, Button, ImageBackground } from 'react-native';
import { Globalstyles } from "../styles/global"; 



export default function Card(props){
    
    return (
     
        <ImageBackground source = {require ('../assets/bgrd.jpg')} style={Globalstyles.imgback}>
            <View>
               {props.children}
            </View>
        </ImageBackground> 
     
    );
}
