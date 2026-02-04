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
      <View style={styles.popup}>
        {/* ÍCONE */}
        <View style={styles.iconeSucesso}>
          <Text style={styles.iconeTexto}>✓</Text>
        </View>
  
        <Text style={styles.textoSucesso}>Agendamento realizado!</Text>
        <Text style={styles.subtitulo}>
          Seu horário foi confirmado com sucesso.
        </Text>
  
        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={irParaAgenda}
          activeOpacity={0.85}
        >
          <Text style={styles.textoBotao}>Acessar a Agenda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}
