import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default function Home({ navigation }) {

  const menus = [
    {
      id: "1",
      titulo: "Empresa",
      icon: "business",
      tipo: "MaterialIcons",
      tela: "Empresa"
    },
    {
      id: "2",
      titulo: "Dashboard",
      icon: "chart-line",
      tipo: "FontAwesome5",
      tela: "Dashboard"
    },
    {
      id: "3",
      titulo: "Financeiro",
      icon: "cash-outline",
      tipo: "Ionicons",
      tela: "Financeiro"
    },
    {
      id: "4",
      titulo: "Agenda Config",
      icon: "calendar-outline",
      tipo: "Ionicons",
      tela: "AgendaConfig"
    },
    {
      id: "5",
      titulo: "Configurações",
      icon: "settings-outline",
      tipo: "Ionicons",
      tela: "Configuracoes"
    }
  ];

  const renderIcon = (item) => {

    if (item.tipo === "MaterialIcons")
      return <MaterialIcons name={item.icon} size={32} color="#eb6363" />;

    if (item.tipo === "FontAwesome5")
      return <FontAwesome5 name={item.icon} size={28} color="#eb6363" />;

    if (item.tipo === "Ionicons")
      return <Ionicons name={item.icon} size={32} color="#eb6363" />;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate(item.tela)}
    >

      <View style={styles.iconContainer}>
        {renderIcon(item)}
      </View>

      <Text style={styles.cardTitulo}>
        {item.titulo}
      </Text>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Kronoly APP
      </Text>

      <FlatList
        data={menus}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}
