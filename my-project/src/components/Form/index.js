import React, {useState} from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

const [height, setHeight] = useState(null)
const [Weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [TextButton, setTextButton] = useState("calcular")

function imcCalculator(){
    return setImc(
        (
          (Weight.replace(",", ".") * 1) /
          (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
        ).toFixed(2)
      );
}

function validationImc(){
    if(Weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc e igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("calcular")
    setMessageImc("preencha os campos")
}
    return(
        <View style={styles.FormContext}>
         <View style={styles.Form}>
            <Text style={styles.FormLabel}>Altura</Text>
            <TextInput 
            styles={styles.Imput}
            onChangeText={setHeight}
            value={height}
            placeholder = "EX . 1.75"
            keyboardType="numeric"
            ></TextInput>

            <Text style={styles.FormLabel}>Peso</Text>
            <TextInput 
            styles={styles.Imput}
            onChangeText={setWeight}
            value={Weight}
            placeholder = "EX . 75"
            keyboardType="numeric"
            ></TextInput>

            <TouchableOpacity 
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
            >
                <Text style={styles.TextButtonCalculator}>{TextButton}</Text>
            
            </TouchableOpacity>

         </View>
         <ResultImc messageResultImc={messageImc} ResultImc={imc}></ResultImc>
        </View>
    );
}