import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
import api from "../../api/api"; // ajuste o caminho se necessário
import "../../../assets/servicos/corte_taper_fade.png"

export default function Servicos({ navigation }) {

  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarServicos = async () => {
    try {
      setLoading(true);

      const response = await api.get("/servicos");

      const dados = response.data.map((s) => ({
        id: String(s.idServico),
        descricao: s.descricao,
        tempoEstimado: s.tempoEstimado,
        valorServico: `R$ ${Number(s.valorServico)
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

  useEffect(() => {
    buscarServicos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* IMAGEM */}
      <Image
        style={styles.image}
        source={require("../../../assets/servicos/corte_taper_fade.png")}
      />
  
      {/* FAIXA INFERIOR SOBRE A IMAGEM */}
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
        <Text style={styles.precoTexto}>
          {item.valorServico}
        </Text>
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

      {/* BOTÃO ADICIONAR SERVIÇO */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AdicionarServico")}
        activeOpacity={0.8}
      >
        <AntDesign name="plus" size={22} color="#FFF" />
        <Text style={styles.addButtonText}>Adicionar Serviço</Text>
      </TouchableOpacity>

    </View>
  );
}
