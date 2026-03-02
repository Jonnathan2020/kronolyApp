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
import { CommonActions } from "@react-navigation/native";


export default function ProdutoAdicionado({navigation}) {

  const irParaProdutos = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Produtos", // nome da TAB
          },
        ],
      })
    );
  };

  return (
    <View style={styles.sucessoContainer}>
      <View style={styles.popup}>
        {/* ÍCONE */}
        <View style={styles.iconeSucesso}>
          <Text style={styles.iconeTexto}>✓</Text>
        </View>
  
        <Text style={styles.textoSucesso}>Produto adicionado!</Text>
        <Text style={styles.subtitulo}>
            Produto foi criado com sucesso!
        </Text>
  
        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={irParaProdutos}
          activeOpacity={0.85}
        >
          <Text style={styles.textoBotao}>Acessar os produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}
