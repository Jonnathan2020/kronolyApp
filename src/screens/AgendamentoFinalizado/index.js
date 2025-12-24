import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";
import styles from "./style";

export default function AgendamentoFinalizado({ navigation }) {

  const irParaAgenda = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Agenda", // nome da TAB
          },
        ],
      })
    );
  };

  return (
    <View style={styles.sucessoContainer}>
      <Text style={styles.sucessoTexto}>Agendamento realizado!</Text>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={irParaAgenda}
      >
        <Text style={styles.textoBotao}>Acessar a Agenda</Text>
      </TouchableOpacity>
    </View>
  );
}
