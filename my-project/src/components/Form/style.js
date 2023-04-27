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

   },

   TextButtonCalculator:{
    fontSize: 20,
    color:"#ffffff",
   },

   buttonCalculator: {
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      backgroundColor: "#FF0043",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 12,
      marginTop: 30,
    },
    errorMessage:{
      fontSize:12,
      color:"#FF0043",
      fontWeight:"bold",
      paddingLeft:20,
    }
})

export default styles