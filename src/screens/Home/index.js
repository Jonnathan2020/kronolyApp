import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./style";

const DATA = [
  {
    id: "1",
    titulo: "Agendamentos",
    //imagem: require("../../assets/agendamentos.png"),
    descricao: "3 agendamentos para hoje"
  },
  {
    id: "2",
    titulo: "Horários",
    //imagem: require("../../assets/horarios.png"),
    descricao: "5 horários disponíveis"
  },
  {
    id: "3",
    titulo: "Serviços",
    //imagem: require("../../assets/servicos.png"),
    descricao: "8 serviços cadastrados"
  },
  {
    id: "4",
    titulo: "Produtos",
    //imagem: require("../../assets/produtos.png"),
    descricao: "12 produtos ativos"
  },
  {
    id: "5",
    titulo: "Agenda",
    //imagem: require("../../assets/agendamentos.png"),
    descricao: "Criar Agenda"
  }
];

export default function Home() {

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* IMAGEM ILUSTRATIVA */}
      <Image
        source={item.imagem}
        style={styles.image}
        resizeMode="cover"
      />

      {/* TÍTULO */}
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{item.titulo}</Text>
      </View>

      {/* DESCRIÇÃO / RESUMO */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.descricao}</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
