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


export default function ServicoAdicionado({navigation}) {


  const [descricao, setDescricao] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState(0);
  const [valorCusto, setValorCusto] = useState(0);
  const [valorServico, setValorServico] = useState(0);

  const irParaServicos = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Serviços", // nome da TAB
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
  
        <Text style={styles.textoSucesso}>Serviço adicionado!</Text>
        <Text style={styles.subtitulo}>
            Serviço foi criado com sucesso!
        </Text>
  
        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={irParaServicos}
          activeOpacity={0.85}
        >
          <Text style={styles.textoBotao}>Acessar os serviços</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
}
