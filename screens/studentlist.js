import React , {useState , useEffect} from "react"
import { View,Text, Button , FlatList } from 'react-native';
import { Globalstyles } from "../styles/global"; 
import Card from "../shared/card";
import axios from "axios";

const client = axios.create({
    baseURL: "http://3.136.154.123:4000/students" 
  });


export default function Studentlist(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
       client.get('?_limit=10').then((response) => {
          setStudents(response.data);
       });
    }, []);

    return (
     
       <Card>
        <View>
            <Text style={Globalstyles.headertxt}> This is the students list </Text>
                <FlatList
                data={students}
                renderItem={({ item }) => (
                    <Text>{item.name} {item.email}</Text>
                    
                )}
                />
            
            <Button title = 'test' color='coral'/>
        </View>

       </Card>
     
    );
}