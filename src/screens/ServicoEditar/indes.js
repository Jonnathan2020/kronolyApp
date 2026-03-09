import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./style";
import api from "../../api/api";

export default function ServicoEditar({route, navigation }) {
  const { servico } = route.params;

  const [descricao, setDescricao] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState("");
  const [valorCusto, setValorCusto] = useState("");
  const [valorServico, setValorServico] = useState("");
  const [quantServicos, setQuantServicos] = useState("");

  useEffect(() => {
    if (servico) {
      setDescricao(servico.descricao);
      setTempoEstimado(String(servico.tempoEstimado || ""));
      setValorCusto(String(servico.valorCusto || ""));
      setValorServico(String(servico.valorServico || ""));
      setQuantServicos(String(servico.quantServicos || ""));
    }
  }, []);

  const atualizarServico = async () => {
    try {
      const payload = {
        idServico: servico.idServico,
        descricao: descricao,
        tempoEstimado: Number(tempoEstimado),
        valorCusto: Number(valorCusto),
        valorServico: Number(valorServico),
        quantServicos: Number(quantServicos),
      };

      console.log("📤 ATUALIZANDO SERVIÇO:", payload);

      await api.put("/servicos/" + servico.idServico, payload);

      Alert.alert("Sucesso", "Serviço atualizado com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Servicos"),
        },
      ]);

    } catch (error) {
      console.log(
        "❌ ERRO AO ATUALIZAR SERVIÇO:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.titulo}>Editar Serviço</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Tempo Estimado (min)"
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
        placeholder="Valor do Serviço"
        keyboardType="numeric"
        value={valorServico}
        onChangeText={setValorServico}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade de Serviços"
        keyboardType="numeric"
        value={quantServicos}
        onChangeText={setQuantServicos}
      />

      <TouchableOpacity style={styles.botao} onPress={atualizarServico}>
        <Text style={styles.textoBotao}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
