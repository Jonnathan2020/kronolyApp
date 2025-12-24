import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";

const PRODUTOS = [
  {
    id: "1",
    nome: "Shampoo Profissional",
    descricao: "Limpeza profunda para todos os tipos de cabelo.",
    //imagem: require("../../assets/produto1.png"),
    preco: "R$ 35,00",
  },
  {
    id: "2",
    nome: "Condicionador Nutritivo",
    descricao: "Hidratação intensa e brilho natural.",
    //imagem: require("../../assets/produto2.png"),
    preco: "R$ 42,00",
  },
  {
    id: "3",
    nome: "Condicionador Nutritivo",
    descricao: "Hidratação intensa e brilho natural.",
    //imagem: require("../../assets/produto2.png"),
    preco: "R$ 42,00",
  },
  {
    id: "4",
    nome: "Condicionador Nutritivo",
    descricao: "Hidratação intensa e brilho natural.",
    //imagem: require("../../assets/produto2.png"),
    preco: "R$ 42,00",
  },
];

export default function Produtos({ navigation }) {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.image} />

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{item.nome}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.price}>{item.preco}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      />

      {/* BOTÃO ADICIONAR */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AdicionarProduto")}
      >
        <AntDesign name="plus" size={22} color="#FFF" />
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>

    </View>
  );
}
