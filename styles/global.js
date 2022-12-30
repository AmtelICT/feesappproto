import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const Globalstyles=StyleSheet.create({

    headertxt:{
        marginTop: 10,
        color : 'white',
        fontWeight :'Bold',
        fontSize:30,
    },

    imgback:{
        flex:1,
    }, 

    txtinput:{
        height:40,
        width:'95%' ,
        marginBottom: 20,
        paddingTop : 40,
        
        borderColor: 'gray',
        borderWidth: 1
        
       // width:50 ,
      //   backgroundColor:'white'
    } ,

    headertxt2:{
        flexDirection:"row",
        justifyContent:'center',
        marginTop: 10,
        color : 'white',
        fontWeight :'Bold',
        fontSize:20,
    }
})