import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import styles from "./style";
import api from "../../api/api";

export default function Produtos({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarProdutos = async () => {
    try {
      setLoading(true);

      const response = await api.get("/produtos");

      const dados = response.data.map((s) => ({
        id: String(s.idProduto),
        idProduto: s.idProduto,
        descricao: s.descricao,
        quantProduto: s.quantProduto,
        valorCusto: s.valorCusto,
        valorVenda: s.valorVenda, // 👈 IMPORTANTE
        valorProduto: `R$ ${Number(s.valorVenda)
          .toFixed(2)
          .replace(".", ",")}`,
      }));
      

      setProdutos(dados);
    } catch (error) {
      console.log("❌ ERRO AO BUSCAR PRODUTOS:", error.message);
      setProdutos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  const removerProduto = (id) => {
    Alert.alert(
      "Remover Produto",
      "Deseja realmente remover este produto?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          style: "destructive",
          onPress: async () => {
            try {
              await api.delete(`/produtos/${id}`);

              setProdutos((prev) => prev.filter((p) => p.id !== id));

              console.log("Produto removido com sucesso");
            } catch (error) {
              console.log("Erro ao remover produto:", error);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require("../../../assets/servicos/corte_taper_fade.png")}
      />

      {/* FAIXA INFERIOR */}
      <View style={styles.footerOverlay}>
        <View style={{ flex: 1 }}>
          <Text style={styles.nomeProduto}>
            {item.descricao}
          </Text>

          {/* LINHA PREÇO + ÍCONES */}
          <View style={styles.precoLinha}>
            <Text style={styles.precoTexto}>
              {item.valorProduto}
            </Text>

            <TouchableOpacity
              style={styles.iconButtonEdit}
              onPress={() =>
                navigation.navigate("ProdutoEditar", { produto: item })
              }
            >
              <Feather name="edit" size={20} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButtonDelete}
              onPress={() => removerProduto(item.id)}
            >
              <AntDesign name="delete" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={buscarProdutos}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* BOTÃO ADICIONAR */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("ProdutoAdicionar")}
        activeOpacity={0.8}
      >
        <AntDesign name="plus" size={22} color="#FFF" />
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}
