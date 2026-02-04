import React, { useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import api from "../../api/api";
import styles from "./style";

export default function AgendamentoConfirmacao({ navigation, route }) {
  const { data, hora, horarioId, nome, contatoCliente, servicos = [], produtos = [], obs } =
    route.params;

  /* 🔎 LOGS */
  console.log("📦 PARAMS RECEBIDOS:", route.params);
  console.log("📅 DATA:", data);
  console.log("⏰ HORÁRIO:", hora);
  console.log("⏰ IDHORARIO: ", horarioId)

  /* 🔹 FORMATAR DATA */
  const dataFormatada = useMemo(() => {
    if (!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }, [data]);

  /* 🔹 CALCULAR TOTAL */
  const valorServicos = servicos.reduce(
    (acc, s) => acc + Number(s.valorServico || 0),
    0
  );

  const valorProdutos = produtos.reduce(
    (acc, p) => acc + Number(p.valorVenda || 0),
    0
  );

  const total = useMemo(() => {

    return valorServicos + valorProdutos;
  }, [servicos, produtos]);

  const renderServico = ({ item }) => (
    <View style={styles.itemLinha}>
      <Text style={styles.itemNome}>{item.descricao}</Text>
      <Text style={styles.itemValor}>
        R$ {Number(item.valorServico).toFixed(2).replace(".", ",")}
      </Text>
    </View>
  );

  const renderProduto = ({ item }) => (
    <View style={styles.itemLinha}>
      <Text style={styles.itemNome}>{item.descricao}</Text>
      <Text style={styles.itemValor}>
        R$ {Number(item.valorVenda).toFixed(2).replace(".", ",")}
      </Text>
    </View>
  );

  const salvarAgendamento = async () => {
    try {
      const payload = {
        data,
        hora: hora,
        nomeCliente: nome,
        contatoCliente,
        observacoes: obs,
        servicos: servicos.map((s) => s.idServico),
        produtos: produtos.map((p) => p.idProduto),
        valorServicos,
        valorProdutos,
        valorTotal: total,
      };
  
      console.log("📤 ENVIANDO AGENDAMENTO:", payload);
  
      await api.post("/agendamento/registro", payload);
  
      navigation.navigate("AgendamentoFinalizado");
    } catch (error) {
      console.log(
        "❌ ERRO AO SALVAR AGENDAMENTO:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        <Text style={styles.titulo}>Confirmar agendamento</Text>

        {/* DATA + HORA */}
        <View style={styles.cardDataHora}>
          <Text style={styles.dataHoraTexto}>
            {dataFormatada} • {hora}
          </Text>
        </View>

        {/* CLIENTE */}
        {(nome || contatoCliente) && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Cliente</Text>
            {nome && <Text style={styles.texto}>{nome}</Text>}
            {contatoCliente && <Text style={styles.texto}>{contatoCliente}</Text>}
          </View>
        )}

        {/* SERVIÇOS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Serviços</Text>
          <FlatList
            data={servicos}
            keyExtractor={(item) => item.idServico.toString()}
            renderItem={renderServico}
            scrollEnabled={false}
          />
        </View>

        {/* PRODUTOS */}
        {produtos.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Produtos</Text>
            <FlatList
              data={produtos}
              keyExtractor={(item) => item.idProduto.toString()}
              renderItem={renderProduto}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* OBS */}
        {obs && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Observações</Text>
            <Text style={styles.texto}>{obs}</Text>
          </View>
        )}
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValor}>
            R$ {total.toFixed(2).replace(".", ",")}
          </Text>
        </View>

        <View style={styles.footerBotoes}>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnCancelarTexto}>Descartar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnConfirmar}
            onPress={salvarAgendamento}
          >
            <Text style={styles.btnConfirmarTexto}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
