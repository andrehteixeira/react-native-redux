import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Saldo } from "../../components/Saldo";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { iInicialState } from "../../store";

export function Moedas() {
  const dispatch = useDispatch();
  const moedas = useSelector((state: iInicialState) => state.moedas);

  const incrementhandler = () => {
    dispatch({ type: "incrementMoedas" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrementMoedas" });
  };
  return (
    <View style={styles.container}>
      <Saldo />
      <View style={styles.containerScreen}>
        <View style={styles.containerValores}>
          <Text style={styles.TextValor}>Moedas</Text>
          <Text style={styles.TextValor}>R$ {moedas}</Text>
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
