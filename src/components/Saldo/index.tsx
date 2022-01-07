import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { iInicialState } from "../../store";

export function Saldo() {
  const moedas = useSelector((state: iInicialState) => state.moedas);
  const poupanca = useSelector((state: iInicialState) => state.poupanca);
  const verSaldo = useSelector((state: iInicialState) => state.verSaldo);
  const saldo = moedas + poupanca;
  return (
    <View style={styles.containerSaldo}>
      <Text style={styles.TextSaldo}>
        Saldo acumulado: R$ {verSaldo ? saldo : "||||||||||"}
      </Text>
    </View>
  );
}
