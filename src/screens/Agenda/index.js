import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import api from "../../api/api.js";
import styles from "./style";

console.log("API IMPORTADA É:", api);
console.log("TIPO:", typeof api);
console.log("TEM GET?", api?.get);

/* ===================== COMPONENT ===================== */
export default function Agenda() {

  const [selectedDate, setSelectedDate] = useState("2025-12-22");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [items, setItems] = useState({});

  /* ===================== HORÁRIOS ===================== */
  const HORARIOS = [
    "08:00","08:30","09:00","09:30","10:00","10:30",
    "11:00","11:30","12:00","12:30","13:00","13:30",
    "14:00","14:30","15:00","15:30","16:00","16:30",
    "17:00","17:30","18:00","18:30","19:00","19:30",
    "20:00","20:30","21:00","21:30","22:00","22:30","23:00"
  ];

  /* ===================== UTIL ===================== */
  const formatarDataTitulo = (dateString) => {
    const [ano, mes, dia] = dateString.split("-");
    const data = new Date(ano, mes - 1, dia);
    return data.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  const extrairHora = (dateTime) => dateTime.substring(11, 16);

  /* ===================== BACKEND ===================== */
  const buscarAgendamentos = async (data) => {
    console.log("📅 DATA ENVIADA:", data);

    try {
      console.log("API:", api);
      const response = await api.get(`/agendamento/data/${data}`);
      const organizado = {};

      response.data.forEach((ag) => {
        const hora = extrairHora(ag.dataInicio);

        if (!organizado[data]) organizado[data] = {};
        if (!organizado[data][hora]) organizado[data][hora] = [];

        organizado[data][hora].push({
          id: ag.idAgendamento,
          nome: ag.nomeCliente,
          descricao: ag.descricao,
          valorServicos: `R$ ${ag.valorServicos}`,
          servico: ag.titulo,
          status: ag.statusAgendamento,
        });
      });

      setItems(organizado);
    } catch (error) {
      console.log("❌ ERRO API:", error.message);
      setItems({});
    }
  };

  useEffect(() => {
    buscarAgendamentos(selectedDate);
  }, [selectedDate]);

  /* ===================== RENDER ===================== */
  const renderHorario = ({ item }) => {
    const agendamentos = items[selectedDate]?.[item];

    return (
      <View style={styles.linhaHorario}>
        <Text style={styles.hora}>{item}</Text>
        <View style={styles.conteudo}>
          <View style={styles.linha} />
          {agendamentos?.map((ag) => (
            <View key={ag.id} style={styles.card}>
              <Text style={styles.cardTitulo}>
                {ag.nome} – {ag.servico}
              </Text>
              <Text style={styles.cardStatus}>{ag.status}</Text>
              <Text style={styles.cardStatus}>{ag.descricao}</Text>
              <Text style={styles.cardStatus}>{ag.valorServicos}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  /* ===================== JSX ===================== */
  return (
    <View style={styles.containerAgenda}>
      <Text
        style={styles.titulo}
        onPress={() => setCalendarOpen(!calendarOpen)}
      >
        {calendarOpen ? "⬆ " : "⬇ "}
        {formatarDataTitulo(selectedDate)}
      </Text>


      {calendarOpen && (
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setCalendarOpen(false); // 🔥 FECHA AQUI
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#6A5ACD",
          },
        }}
        theme={{
          todayTextColor: "#6A5ACD",
          arrowColor: "#000",
        }}

        style={styles.calendarioCompacto}
      />
    )}


      <FlatList
        data={HORARIOS}
        keyExtractor={(item) => item}
        renderItem={renderHorario}
      />
    </View>
  );
}
