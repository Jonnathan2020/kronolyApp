import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function AgendamentoConfirmacao({ navigation, route }) {
    const dados = route.params;
  
    return (
      <View style={styles.containerNovo}>
        <Text style={styles.textTitulo}>Confirme as informações</Text>
  
        <View style={styles.cardConfirmacao}>
          <Text style={styles.textoConfirmacao}>Nome: {dados.nome}</Text>
          <Text style={styles.textoConfirmacao}>Contato: {dados.contato}</Text>
          <Text style={styles.textoConfirmacao}>Serviço: {dados.servico}</Text>
          <Text style={styles.textoDataHora}>
            {dados.data} • {dados.horario}
          </Text>
        </View>
  
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("AgendamentoFinalizado")}
        >
          <Text style={styles.textoBotao}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  