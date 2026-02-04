import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import api from "../../api/api";
import styles from "./style";

export default function AgendamentoHorario({ navigation, route }) {
  const dataSelecionada = route.params?.data;

  const [horarios, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  useEffect(() => {
    if (!dataSelecionada) return;

    api
      .get(`/horarios/disponiveis/${dataSelecionada}`)
      .then((res) => {
        // 🔥 filtra disponíveis e formata hora
        const horariosFormatados = res.data
          .filter((h) => h.disponivel)
          .map((h) => ({
            id: h.idHorario,
            hora: h.horaInicio.substring(0, 5), // "08:00"
            raw: h, // opcional, caso precise depois
          }));

        setHorarios(horariosFormatados);
      })
      .catch((err) =>
        console.log("❌ ERRO AO BUSCAR HORÁRIOS:", err.message)
      );
  }, [dataSelecionada]);

  return (
    <ScrollView style={styles.containerNovo}>
      <Text style={styles.textTitulo}>Selecione o horário</Text>

      <View style={styles.horariosContainer}>
        {horarios.map((h) => (
          <TouchableOpacity
            key={h.id}
            style={[
              styles.horarioItem,
              horarioSelecionado?.id === h.id && styles.horarioSelecionado,
            ]}
            onPress={() => setHorarioSelecionado(h)}
          >
            <Text
              style={[
                styles.horarioTexto,
                horarioSelecionado?.id === h.id &&
                  styles.horarioTextoSelecionado,
              ]}
            >
              {h.hora}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.botao}
        disabled={!horarioSelecionado}
        onPress={() => {
          navigation.navigate("AgendamentoDados", {
            data: dataSelecionada,
            horarioId: horarioSelecionado.id,
            hora: horarioSelecionado.hora,
          });
        }}
      >
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
