import React from "react"
import { View,Text, Button  } from 'react-native';
import { Globalstyles } from "../styles/global"; 
import Card from "../shared/card";
export default function SignUp(){

    return (
     
       <Card>
        <View>
            <Text style={Globalstyles.headertxt}> SignUp</Text>

            <Button title = 'test' color='coral'/>
        </View>
        </Card>
     
    );
}
