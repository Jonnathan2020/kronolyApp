import React, { useState, useEffect } from "react";
import {                                                                                                                                                                           View,
  Text,                                                                                                                                                                            FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";
import api from "../../api/api.js";
import styles from "./style";

/* ===================== DATA ATUAL ===================== */
const hojeISO = () => {
  const hoje = new Date();
  return hoje.toISOString().split("T")[0];
};

/* ===================== COMPONENT ===================== */
export default function Agenda() {
  const [selectedDate, setSelectedDate] = useState(hojeISO());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [items, setItems] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const HORARIOS = [
    "08:00","08:30","09:00","09:30","10:00","10:30",
    "11:00","11:30","12:00","12:30","13:00","13:30",
    "14:00","14:30","15:00","15:30","16:00","16:30",
    "17:00","17:30","18:00","18:30","19:00","19:30",
    "20:00","20:30","21:00","21:30","22:00","22:30","23:00"
  ];

  /* ===================== AÇÕES STATUS ===================== */
  const ACOES = [
    { titulo: "Iniciar", endpoint: "/iniciarAgendamento", cor: "#4CAF50" },
    { titulo: "Finalizar", endpoint: "/finalizarAgendamento", cor: "#00897B" },
    { titulo: "Cancelar", endpoint: "/cancelarAgendamentoPrestador", cor: "#f44336" },
  ];

  const formatarDataTitulo = (dateString) => {
    if (!dateString) return "";
    const [ano, mes, dia] = dateString.split("-");
    const data = new Date(ano, mes - 1, dia);
    return data.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  const extrairHora = (dateTime) => dateTime.substring(11, 16);

  const buscarAgendamentos = async (data) => {
    if (!data) return;

    try {
      const response = await api.get(`/agendamento/data/${data}`);
      const organizado = {};

      response.data.forEach((ag) => {
        const hora = extrairHora(ag.dataInicio);
        const servicosLista = ag.servicos.map((s) => s.descricao);

        if (!organizado[data]) organizado[data] = {};
        if (!organizado[data][hora]) organizado[data][hora] = [];

        organizado[data][hora].push({
          id: ag.idAgendamento,
          raw: ag,
          nome: ag.nomeCliente,
          descricao: ag.descricao,
          valorServicos: `R$ ${ag.valorServicos}`,
          servicosLista,
          status: ag.statusAgendamento,
        });
      });

      setItems(organizado);
    } catch (error) {
      console.log("❌ ERRO API:", error.message);
      setItems({});
    }
  };

  const executarAcao = async (acao) => {
    setCarregando(true);
    try {
      await api.put(`/agendamento/${agendamentoSelecionado.id}${acao.endpoint}`);
      setModalOpen(false);
      buscarAgendamentos(selectedDate);
      Alert.alert("Sucesso", `Agendamento ${acao.titulo.toLowerCase()}!`);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível executar a ação.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarAgendamentos(selectedDate);
  }, [selectedDate]);

  const renderHorario = ({ item }) => {
    const agendamentos = items[selectedDate]?.[item];

    return (
      <View style={styles.linhaHorario}>
        <Text style={styles.hora}>{item}</Text>

        <View style={styles.conteudo}>
          <View style={styles.linha} />

          {agendamentos?.map((ag) => (
            <TouchableOpacity key={ag.id} onPress={() => {
              setAgendamentoSelecionado(ag);
              setModalOpen(true);
            }}>
              <View style={styles.card}>
                <Text style={styles.cardTitulo}>
                  {ag.nome} – {ag.servicosLista?.join(", ")}
                </Text>
                <Text style={styles.cardStatus}>{ag.status}</Text>
                <Text style={styles.cardStatus}>{ag.descricao}</Text>
                <Text style={styles.cardStatus}>{ag.valorServicos}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  /* ===================== MODAL ===================== */
  const ag = agendamentoSelecionado;

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
            setCalendarOpen(false);
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

      <Modal
        visible={modalOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              {ag && (
                <>
                  <Text style={styles.modalTitulo}>Detalhes do Agendamento</Text>

                  <Text style={styles.modalLabel}>Cliente</Text>
                  <Text style={styles.modalText}>{ag.raw.nomeCliente}</Text>

                  {ag.raw.contatoCliente && (
                    <>
                      <Text style={styles.modalLabel}>Contato</Text>
                      <Text style={styles.modalText}>{ag.raw.contatoCliente}</Text>
                    </>
                  )}

                  <Text style={styles.modalLabel}>Serviços</Text>
                  {ag.raw.servicos.map((s) => (
                    <Text key={s.idServico} style={styles.modalServico}>
                      • {s.descricao} — R$ {s.valorServico} ({s.tempoEstimado}min)
                    </Text>
                  ))}

                  <Text style={styles.modalLabel}>Valor Serviços</Text>
                  <Text style={styles.modalText}>R$ {ag.raw.valorServicos}</Text>

                  {ag.raw.valorProdutos > 0 && (
                    <>
                      <Text style={styles.modalLabel}>Valor Produtos</Text>
                      <Text style={styles.modalText}>R$ {ag.raw.valorProdutos}</Text>
                    </>
                  )}

                  <Text style={styles.modalLabel}>Status</Text>
                  <Text style={styles.modalText}>{ag.raw.statusAgendamento}</Text>

                  {ag.raw.descricao && (
                    <>
                      <Text style={styles.modalLabel}>Observação</Text>
                      <Text style={styles.modalText}>{ag.raw.descricao}</Text>
                    </>
                  )}

                  <Text style={styles.modalDivisor}>Ações</Text>

                  {carregando ? (
                    <ActivityIndicator size="large" color="#6A5ACD" />
                  ) : (
                    ACOES.map((acao) => (
                      <TouchableOpacity
                        key={acao.endpoint}
                        style={[styles.modalBotao, { backgroundColor: acao.cor }]}
                        onPress={() => executarAcao(acao)}
                      >
                        <Text style={styles.modalBotaoTexto}>{acao.titulo}</Text>
                      </TouchableOpacity>
                    ))
                  )}

                  <TouchableOpacity
                    style={styles.modalBotaoCancelar}
                    onPress={() => setModalOpen(false)}
                  >
                    <Text style={styles.modalBotaoCancelarTexto}>Fechar</Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}