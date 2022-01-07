import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Saldo } from "../../components/Saldo";
import { iInicialState } from "../../store";
import { styles } from "./styles";

export function Poupanca() {
  const dispatch = useDispatch();
  const poupanca = useSelector((state: iInicialState) => state.poupanca);

  const incrementhandler = () => {
    dispatch({ type: "incrementPoupanca" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrementPoupanca" });
  };
  return (
    <View style={styles.container}>
      <Saldo />
      <View style={styles.containerScreen}>
        <View style={styles.containerValores}>
          <Text style={styles.TextValor}>Poupança</Text>
          <Text style={styles.TextValor}>R$ {poupanca}</Text>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.Buttons} onPress={decrementHandler}>
            <Text style={styles.TextButtons}>Remover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buttons} onPress={incrementhandler}>
            <Text style={styles.TextButtons}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
