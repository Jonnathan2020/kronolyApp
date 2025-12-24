import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";


export default function AgendamentoHorario({ navigation, route }) {
    const { data } = route.params;
    const [horario, setHorario] = useState(null);
  
    const horarios = [
      "10:00", "10:30", "11:00", "11:30",
      "13:00", "13:30", "14:00", "14:30",
    ];
  
    return (
      <View style={styles.containerNovo}>
        <Text style={styles.textTitulo}>Selecione o horário</Text>
  
        <View style={styles.horariosContainer}>
          {horarios.map((h) => (
            <TouchableOpacity
              key={h}
              style={[
                styles.horarioItem,
                horario === h && styles.horarioSelecionado,
              ]}
              onPress={() => setHorario(h)}
            >
              <Text
                style={[
                  styles.horarioTexto,
                  horario === h && styles.horarioTextoSelecionado,
                ]}
              >
                {h}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
  
        <TouchableOpacity
          style={styles.botao}
          disabled={!horario}
          onPress={() =>
            navigation.navigate("AgendamentoDados", {
              data,
              horario,
            })
          }
        >
          <Text style={styles.textoBotao}>Próximo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  