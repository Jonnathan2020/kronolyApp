import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./style";
import api from "../../api/api";

export default function Servicos({ navigation }) {

  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarServicos = async () => {
    try {
      setLoading(true);

      const response = await api.get("/servicos");

      const dados = response.data.map((s) => ({
        id: String(s.idServico),
        idServico: s.idServico,
        descricao: s.descricao,
        tempoEstimado: s.tempoEstimado,
        valorServico: s.valorServico,
        valorFormatado: `R$ ${Number(s.valorServico)
          .toFixed(2)
          .replace(".", ",")}`,
      }));

      setServicos(dados);
    } catch (error) {
      console.log("❌ ERRO AO BUSCAR SERVIÇOS:", error.message);
      setServicos([]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      buscarServicos();
    }, [])
  );

  const removerServico = (id) => {
    Alert.alert(
      "Remover Serviço",
      "Deseja realmente excluir este serviço?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await api.delete(`/servicos/${id}`);

              setServicos((prev) =>
                prev.filter((s) => s.idServico !== id)
              );
            } catch (error) {
              console.log("Erro ao excluir serviço:", error);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* IMAGEM */}
      <Image
        style={styles.image}
        source={require("../../../assets/servicos/corte_taper_fade.png")}
      />

      {/* FAIXA INFERIOR */}
      <View style={styles.footerOverlay}>

        {/* ESQUERDA */}
        <View>
          <Text style={styles.nomeServico}>
            {item.descricao}
          </Text>

          <Text style={styles.tempoTexto}>
            {item.tempoEstimado} min
          </Text>
        </View>

        {/* DIREITA */}
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.precoTexto}>
            {item.valorFormatado}
          </Text>

          <View style={{ flexDirection: "row", marginTop: 6 }}>

            {/* EDITAR */}
            <TouchableOpacity
              style={styles.iconButtonEdit}
              onPress={() =>
                navigation.navigate("ServicoEditar", { servico: item })
              }
            >
              <Feather name="edit" size={20} color="#FFF" />
            </TouchableOpacity>

            {/* EXCLUIR */}
            <TouchableOpacity
              style={styles.iconButtonDelete}
              onPress={() => removerServico(item.idServico)}
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
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={buscarServicos}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* BOTÃO ADICIONAR */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("ServicoAdicionar")}
        activeOpacity={0.8}
      >
        <AntDesign name="plus" size={22} color="#FFF" />
        <Text style={styles.addButtonText}>Adicionar Serviço</Text>
      </TouchableOpacity>

    </View>
  );
}
