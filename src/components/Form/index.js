import React, { useState } from "react";
import { FlatList, Keyboard, Pressable, Text, TextInput, TouchableOpacity, Vibration, View } from "react-native";
import ResultImc from './ResultImc/index';
import style from './style';

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    let totalImc = ((weight/(heightFormat*heightFormat)).toFixed(2))

    setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
    setImc(totalImc)
  }

  function verificationImc() {
    if(imc === null) {
      Vibration.vibrate()
      setErrrorMessage("campo obrigatório*")
    }
  }

  function validationImc() {
    console.log("IMC List", imcList)
    if(weight !== null && height !== null){
      Keyboard.dismiss()
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      setErrrorMessage(null)
    } else {
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("preencha o peso e altura")
    }
  }

  return (
    <View style={style.formContext}>
      {imc === null ?
        <Pressable onPress={Keyboard.dismiss} style={style.form}>
          <View style={style.rowElementForm}>
            <Text style={style.formLabel}>Altura</Text>
            <TextInput
              style={style.input}
              onChangeText={setHeight}
              value={height}
              placeholder="Ex. 1.75"
              keyboardType="numeric"
            />
            <Text style={style.errorMessage}>{errorMessage}</Text>
          </View>

          <View style={style.rowElementForm}>
            <Text style={style.formLabel}>Peso</Text>
            <TextInput
              style={style.input}
              onChangeText={setWeight}
              value={weight}
              placeholder="Ex. 75"
              keyboardType="numeric"
            />
            <Text style={style.errorMessage}>{errorMessage}</Text>
          </View>

          <TouchableOpacity
            style={style.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={style.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable> :
        <View style={style.showResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            style={style.buttonCalculator}
            onPress={() => validationImc()}>
            <Text style={style.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }

      <FlatList
        style={style.listImc}
        data={imcList.reverse()}
        renderItem={({item}) => {
          return (
            <Text style={style.resultImcItem}>
              <Text style={style.textResultItemList}>Resultado IMC: </Text>
              {item.imc}
            </Text>
          )
        }}
        keyExtractor={(item) => {item.id}}
      />
    </View>
  )
}
