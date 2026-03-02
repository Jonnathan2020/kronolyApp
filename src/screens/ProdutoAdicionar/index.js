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


export default function ProdutoAdicionar({navigation}) {


  const [descricao, setDescricao] = useState("");
  const [valorCusto, setValorCusto] = useState(0);
  const [valorVenda, setValorVenda] = useState(0);

  const salvarProduto = async () => {
    try {
      const payload = {
        descricao,
        valorCusto,
        valorVenda
      };
  
      console.log("📤 ENVIANDO PRODUTO:", payload);
  
      await api.post("/produtos/registro", payload);
  
      navigation.navigate("ProdutoAdicionado");
    } catch (error) {
      console.log(
        "❌ ERRO AO SALVAR PRODUTO:",
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
        placeholder="Valor de Custo"
        keyboardType="numeric"
        value={valorCusto}
        onChangeText={setValorCusto}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor de Venda"
        keyboardType="numeric"
        value={valorVenda}
        onChangeText={setValorVenda}
      />

      {/* BOTÃO CONFIRMAR */}
      <TouchableOpacity
        style={styles.botao }
        onPress={salvarProduto}
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  
}

