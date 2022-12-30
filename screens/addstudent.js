import React, {useEffect, useState} from "react"
import { View,Text, Button , TextInput  } from 'react-native';
import { Globalstyles } from "../styles/global"; 
import Card from "../shared/card";
import axios from "axios";

const client = axios.create({
    baseURL: "http://3.136.154.123:4000/students/create-student" 
  });

export default function Addstudent(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollno, setRollno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addstudent(name, email,rollno);
     };

   



    const addstudent = (name, email,rollno ) => {
        client
           .post('', {
              name: name,
              email: email,
              rollno:rollno
           })
           .then((response) => {
              setPosts([response.data, ...posts]);
           });
        setName('');
        setEmail('');
        setRollno('');
     };

    return (
     
       <Card>
        <View>
            <Text style={Globalstyles.headertxt}> Welcome Adding Student</Text>
        </View>
         <View> 
            
                  <View>
                    <TextInput
                        styles ={Globalstyles.txtinput}
                        placeholder = 'Your Name'
                        placeholderTextColor="#FFF" 
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />  

                   <TextInput
                        styles ={Globalstyles.txtinput}
                        placeholder = 'Your Email'
                        placeholderTextColor="#FFF" 
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />  

                <TextInput
                        styles ={Globalstyles.txtinput}
                        placeholder = 'Your Roll Number'
                        placeholderTextColor="#FFF" 
                        value={rollno}
                        onChangeText={(text) => setRollno(text)}
                    />  
                  </View>
            <Button title = 'Submit' color='coral' onPress={handleSubmit}/>
        </View>
    </Card>
     
    );
}