import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Resultado from "./Resultado";
import styles from "./style";

export default function Form() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensagemImc, setMensagemImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular");

  const calcular = () => {
    const iMc = (peso / (altura * altura)).toFixed(2);
    setImc(iMc);

    if (peso > 0 && altura > 0) {
      if (iMc < 18.5) {
        setMensagemImc("Abaixo do peso");
      } else if (iMc <= 24.9) {
        setMensagemImc("Peso normal");
      } else if (iMc <= 29.9) {
        setMensagemImc("Sobrepeso");
      } else if (iMc <= 34.9) {
        setMensagemImc("Obesidade grau 1");
      } else if (iMc <= 39.9) {
        setMensagemImc("Obesidade grau 2");
      } else {
        setMensagemImc("Obesidade grau 3");
      }
    } else {
      setMensagemImc("Preencha os campos");
    }

    setAltura("");
    setPeso("");
  };
  function validationImc() {
    if (peso > 0 && altura > 0) {
      calcular();
      setTextButton("Novo Cálculo");
      return;
    }
    setImc(0);
    setTextButton("Calcular");
    setMensagemImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 1.68"
          keyboardType="numeric"
          onChangeText={(text) => setAltura(text)}
          value={altura}
        />

        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 55"
          keyboardType="numeric"
          onChangeText={(text) => setPeso(text)}
          value={peso}
        />
        <TouchableOpacity style={styles.calculator} onPress={validationImc}>
          <Text style={styles.calculatorText}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <Resultado resultadoImc={imc} mensagemResultado={mensagemImc} />
    </View>
  );
}
