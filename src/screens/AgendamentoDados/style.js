import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },

  subTitulo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#555",
    padding: 15,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
  },

  subTitulo1: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#555",
    padding: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
  },

  inputMultiline: {
    height: 100,
    textAlignVertical: "top",
    marginVertical: 20,
    bottom: 20,
  },

  toggleServico: {
    marginVertical: 12,
    padding: 8,
    backgroundColor: "#EEE",
    borderRadius: 8,
  },

  itemServico: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEE",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },

  itemSelecionado: {
    borderColor: "#FF3B30",
    borderWidth: 2,
  },

  infoServico: {
    flex: 1,
  },

  nomeServico: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  detalheServico: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },

  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  checkText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  resumoContainer: {
    marginVertical: 12,
    padding: 12,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEE",
  },

  resumoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#FFF",
    borderRadius: 12,
  },
  listSelecionar:{
    bottom: 30,
    backgroundColor: "#FFF",
    marginTop: 12,
    marginBottom: 12,
  },

  resumoInfo: {
    flex: 1,
  },

  botao: {
    marginTop: 26,
    backgroundColor: "#FF3B30",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    bottom: 40
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    
  },
});
