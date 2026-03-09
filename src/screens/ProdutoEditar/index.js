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

export default function ProdutoEditar({ route, navigation }) {
  const { produto } = route.params;

  const [descricao, setDescricao] = useState("");
  const [quantProduto, setQuantProduto] = useState("");
  const [valorCusto, setValorCusto] = useState("");
  const [valorVenda, setValorVenda] = useState("");

  useEffect(() => {
    if (produto) {
      setDescricao(produto.descricao);
      setQuantProduto(String(produto.quantProduto || ""));
      setValorCusto(String(produto.valorCusto || ""));
      setValorVenda(String(produto.valorVenda || ""));
    }
  }, []);

  const atualizarProduto = async () => {
    try {
      const payload = {
        idProduto: produto.idProduto,
        descricao: descricao,
        quantProduto: Number(quantProduto),
        valorCusto: Number(valorCusto),
        valorVenda: Number(valorVenda),
      };

      console.log("📤 ATUALIZANDO PRODUTO:", payload);

      await api.put("/produtos/" + produto.idProduto, payload);

      Alert.alert("Sucesso", "Produto atualizado com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Produtos"),
        },
      ]);
      
    } catch (error) {
      console.log(
        "❌ ERRO AO ATUALIZAR PRODUTO:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.titulo}>Editar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantProduto}
        onChangeText={setQuantProduto}
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

      <TouchableOpacity style={styles.botao} onPress={atualizarProduto}>
        <Text style={styles.textoBotao}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
