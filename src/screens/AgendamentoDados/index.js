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

export default function AgendamentoDados({ navigation, route }) {
  const { data, horario } = route.params;

  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [obs, setObs] = useState("");

  const [servicos, setServicos] = useState([]);
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const [mostrarServicos, setMostrarServicos] = useState(false);

  /* 🔹 BUSCAR SERVIÇOS */
  useEffect(() => {
    api
      .get("/servicos")
      .then((res) => setServicos(res.data))
      .catch((err) =>
        console.log("❌ ERRO AO BUSCAR SERVIÇOS:", err.message)
      );
  }, []);

  /* 🔹 ADICIONAR / REMOVER SERVIÇO */
  const toggleServico = (servico) => {
    setServicosSelecionados((prev) => {
      const existe = prev.some((s) => s.idServico === servico.idServico);

      if (existe) {
        return prev.filter((s) => s.idServico !== servico.idServico);
      }

      return [...prev, servico];
    });
  };

  const renderServico = ({ item }) => {
    const selecionado = servicosSelecionados.some(
      (s) => s.idServico === item.idServico
    );

    return (
      <TouchableOpacity
        style={[styles.itemServico, selecionado && styles.itemSelecionado]}
        onPress={() => toggleServico(item)}
        activeOpacity={0.8}
      >
        <View style={styles.infoServico}>
          <Text style={styles.nomeServico}>{item.descricao}</Text>
          <Text style={styles.detalheServico}>
            {item.tempoEstimado} min • R$ {item.valorServico}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.titulo}>Informe os dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Contato"
        keyboardType="numeric"
        value={contato}
        onChangeText={setContato}
      />

      {/* TOGGLE SERVIÇOS */}
      <TouchableOpacity
        style={styles.toggleServico}
        onPress={() => setMostrarServicos(!mostrarServicos)}
      >
        <Text style={styles.subTitulo}>
          {mostrarServicos ? "Concluir seleção ▲" : "Selecionar serviços ▼"}
        </Text>
      </TouchableOpacity>

      {/* LISTA DE SERVIÇOS */}
      {mostrarServicos && (
        <FlatList
          data={servicos}
          keyExtractor={(item) => item.idServico.toString()}
          renderItem={renderServico}
          scrollEnabled={false} // FlatList dentro do ScrollView
          style={styles.listSelecionar}
        />
      )}

      {/* RESUMO DOS SERVIÇOS */}
      {servicosSelecionados.length > 0 && !mostrarServicos && (
        <View style={styles.resumoContainer}>
          <Text style={styles.subTitulo1}>Serviços selecionados</Text>

          {servicosSelecionados.map((s) => (
            <View key={s.idServico} style={styles.resumoItem}>
              {/* Ícone de check */}
              <View style={styles.checkIcon}>
                <Text style={styles.checkText}>✓</Text>
              </View>

              {/* Informações do serviço */}
              <View style={styles.resumoInfo}>
                <Text style={styles.nomeServico}>{s.descricao}</Text>
                <Text style={styles.detalheServico}>
                  {s.tempoEstimado} min • R$ {s.valorServico}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* OBSERVAÇÕES */}
      <TextInput
        style={[styles.input, styles.inputMultiline]}
        placeholder="Observações"
        value={obs}
        onChangeText={setObs}
        multiline
      />

      {/* BOTÃO CONFIRMAR */}
      <TouchableOpacity
        style={[styles.botao, servicosSelecionados.length === 0 && { opacity: 0.5 }]}
        disabled={servicosSelecionados.length === 0}
        onPress={() =>
          navigation.navigate("AgendamentoConfirmacao", {
            data,
            horario,
            nome,
            contato,
            servicos: servicosSelecionados,
            obs,
          })
        }
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
