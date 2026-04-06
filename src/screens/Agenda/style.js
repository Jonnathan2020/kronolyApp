import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerAgenda: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    paddingHorizontal: 16,
  },

  titulo: {
    alignSelf: "center",
    backgroundColor: "#FF6B6B",
    color: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 12,
    fontWeight: "600",
    fontSize: 14,
    elevation: 2,
  },

  calendario: {
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#FFF",
    padding: 6,
    elevation: 2,
  },

  calendarioCompacto: {
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#FFF",
    padding: 6,
    elevation: 2,
  },

  linhaHorario: {
    flexDirection: "row",
    marginBottom: 18,
  },

  hora: {
    width: 60,
    fontSize: 13,
    color: "#888",
    fontWeight: "500",
  },

  conteudo: {
    flex: 1,
    paddingLeft: 12,
  },

  linha: {
    height: 1,
    backgroundColor: "#E4E6EB",
    marginBottom: 8,
  },

  linhaAtual: {
    height: 2,
    backgroundColor: "#FF6B6B",
    marginBottom: 8,
    borderRadius: 2,
  },

  card: {
    backgroundColor: "#6A5ACD",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  cardPendente: {
    backgroundColor: "#DCD6FA",
  },

  cardTitulo: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 2,
  },

  cardStatus: {
    color: "#F1F1F1",
    fontSize: 12,
  },

  empty: {
    textAlign: "center",
    marginTop: 30,
    color: "#999",
    fontSize: 14,
  },

/* ===================== MODAL ===================== */

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
},

modalContent: {
  backgroundColor: "#FFF",
  width: "100%",
  borderRadius: 16,
  paddingVertical: 22,
  paddingHorizontal: 18,
  alignItems: "center",
  maxHeight: "90%",
  elevation: 6,
},

modalTitulo: {
  fontSize: 17,
  fontWeight: "600",
  color: "#333",
  textAlign: "center",
  marginBottom: 12,
},

modalLabel: {
  fontSize: 13,
  fontWeight: "600",
  color: "#FF6B6B",
  marginTop: 4,
  marginBottom: 0,
  alignSelf: "flex-start",
},

modalText: {
  fontSize: 14,
  color: "#444",
  marginBottom: 1,
},

modalServico: {
  fontSize: 14,
  color: "#333",
  marginBottom: 1,
},

modalDivisor: {
  fontSize: 14,
  fontWeight: "600",
  color: "#333",
  textAlign: "center",
  marginTop: 8,
  marginBottom: 6,
},
modalBotao: {
  width: "100%",
  borderRadius: 12,
  paddingVertical: 14,
  marginTop: 12,
  marginBottom: 6,
  alignItems: "center",
  backgroundColor: "#FF6B6B",
},

modalBotaoTexto: {
  color: "#FFF",
  fontSize: 15,
  fontWeight: "600",
},

modalBotaoCancelar: {
  width: "100%",
  borderWidth: 1.5,
  borderColor: "#FF6B6B",
  borderRadius: 12,
  paddingVertical: 14,
  marginBottom: 6,
  alignItems: "center",
},

modalBotaoCancelarTexto: {
  color: "#FF6B6B",
  fontSize: 15,
  fontWeight: "600",
},


});
