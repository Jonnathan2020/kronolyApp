import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },

  cardDataHora: {
    backgroundColor: "#FF6B6B",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  dataHoraTexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  texto: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },

  itemLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  itemNome: {
    fontSize: 14,
    color: "#333",
  },

  itemValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF6B6B",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#EEE",
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: 14,
    color: "#555",
  },

  totalValor: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF6B6B",
  },

  footerBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnCancelar: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF6B6B",
    marginRight: 8,
    alignItems: "center",
  },

  btnCancelarTexto: {
    color: "#FF6B6B",
    fontWeight: "600",
  },

  btnConfirmar: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#FF6B6B",
    marginLeft: 8,
    alignItems: "center",
  },

  btnConfirmarTexto: {
    color: "#FFF",
    fontWeight: "600",
  },
});
