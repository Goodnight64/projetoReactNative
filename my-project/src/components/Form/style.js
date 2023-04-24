import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   FormContext:{
    width:"100%",
    height:"100%",
    bottom:0,
    backgroundColor:"#ffffff",
    alignItems:"center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:30,
   },

   Form:{
    width:"100%",
    height:"auto",
    marginTop:30,
    padding: 10,
   },

   FormLabel:{
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
   },

   Imput:{
    width:"90%",
    borderRadius:50,
    backgroundColor: "#f6f6f6",
    height:40,
    margin:12,
    paddingLeft:10,

   }
})

export default styles