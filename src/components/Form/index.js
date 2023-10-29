import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import ResultImc from './ResultImc/index';
import style from './style';

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validationImc() {
    if(weight !== null && height !== null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
  }

  return (
    <View style={style.formContext}>
      <View style={style.form}>
        <Text style={style.formLabel}>Altura</Text>
        <TextInput
          style={style.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text style={style.formLabel}>Peso</Text>
        <TextInput
          style={style.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={style.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={style.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  )
}
