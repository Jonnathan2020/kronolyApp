import React,{useState, useEffect} from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
import api from "../../api/api"; // ajuste o caminho se necessário
import "../../../assets/servicos/corte_taper_fade.png"

export default function Produtos({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarProdutos = async () => {
    try {
      setLoading(true);

      const response = await api.get("/produtos");

      const dados = response.data.map((s) => ({
        id: String(s.idProduto),
        descricao: s.descricao,
        valorCusto: s.valorCusto,
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

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require("../../../assets/servicos/corte_taper_fade.png")}
      />
      {/* FAIXA INFERIOR SOBRE A IMAGEM */}
      <View style={styles.footerOverlay}>
        {/* ESQUERDA */}
        <View>
          <Text style={styles.nomeProduto}>
            {item.descricao}
          </Text>

          {/* DIREITA */}
          <Text style={styles.precoTexto}>
            {item.valorProduto}
          </Text>
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
        onPress={() => navigation.navigate("AdicionarProduto")}
        activeOpacity={0.8}
      >
        <AntDesign name="plus" size={22} color="#FFF" />
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>

    </View>
  );
}
