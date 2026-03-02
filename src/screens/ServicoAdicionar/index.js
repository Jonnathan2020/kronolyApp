import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./style";
import api from "../../api/api";


export default function ServicoAdicionar({navigation}) {


  const [descricao, setDescricao] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState(0);
  const [valorCusto, setValorCusto] = useState(0);
  const [valorServico, setValorServico] = useState(0);

  const salvarServico = async () => {
    try {
      const payload = {
        descricao,
        tempoEstimado,
        valorCusto,
        valorServico
      };
  
      console.log("📤 ENVIANDO SERVIÇO:", payload);
  
      await api.post("/servicos/registro", payload);
  
      navigation.navigate("ServicoAdicionado");
    } catch (error) {
      console.log(
        "❌ ERRO AO SALVAR SERVIÇO:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.titulo}>Informe os dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Tempo Estimado(min)"
        keyboardType="numeric"
        value={tempoEstimado}
        onChangeText={setTempoEstimado}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor de Custo"
        keyboardType="numeric"
        value={valorCusto}
        onChangeText={setValorCusto}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor de Servico"
        keyboardType="numeric"
        value={valorServico}
        onChangeText={setValorServico}
      />

      {/* BOTÃO CONFIRMAR */}
      <TouchableOpacity
        style={styles.botao }
        onPress={salvarServico}
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  
}

