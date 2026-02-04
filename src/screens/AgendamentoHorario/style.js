import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  titulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  textTitulo: {
    color: "#3e3e1e",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  horariosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 1,
  },

  horarioItem: {
    width: "48%",
    backgroundColor: "#FFF",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 14,
  },

  horarioSelecionado: {
    backgroundColor: "#FF6B6B",
  },

  horarioTexto: {
    color: "#333",
    fontSize: 14,
  },

  horarioTextoSelecionado: {
    color: "#FFF",
    fontWeight: "600",
  },

  botao: {
    backgroundColor: "#FF6B6B",
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 60,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
