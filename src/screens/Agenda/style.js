import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerAgenda: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },

  titulo: {
    alignSelf: "center",
    backgroundColor: "#FF6B6B",
    color: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },

  calendario: {
    borderRadius: 10,
    marginBottom: 10,
  },

  linhaHorario: {
    flexDirection: "row",
    marginBottom: 16,
  },

  hora: {
    width: 55,
    fontSize: 13,
    color: "#444",
  },

  conteudo: {
    flex: 1,
    paddingLeft: 10,
  },

  linha: {
    height: 1,
    backgroundColor: "#DDD",
    marginBottom: 6,
  },

  linhaAtual: {
    height: 3,
    backgroundColor: "red",
    marginBottom: 6,
  },

  card: {
    backgroundColor: "#6A5ACD",
    borderRadius: 8,
    padding: 8,
    marginBottom: 6,
  },

  cardPendente: {
    backgroundColor: "#B9B2F3",
  },

  cardTitulo: {
    color: "#fff",
    fontWeight: "bold",
  },

  cardStatus: {
    color: "#EDEDED",
    fontSize: 12,
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});