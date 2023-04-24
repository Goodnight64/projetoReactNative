import React, {useState} from "react";
import { TextInput, View, Text, Button } from "react-native";
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
            <Text>Altura</Text>
            <TextInput 
            onChangeText={setHeight}
            value={height}
            placeholder = "EX . 1.75"
            keyboardType="numeric"
            ></TextInput>

            <Text>Peso</Text>
            <TextInput 
            onChangeText={setWeight}
            value={Weight}
            placeholder = "EX . 75"
            keyboardType="numeric"
            ></TextInput>

            <Button 
            onPress={() => validationImc()}
            title={TextButton}></Button>

         </View>
         <ResultImc messageResultImc={messageImc} ResultImc={imc}></ResultImc>
        </View>
    );
}