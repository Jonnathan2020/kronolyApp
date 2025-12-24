import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD",
  },

  card: {
    marginBottom: 20,
  },

  /* IMAGEM GRANDE (quadrado vermelho do mock) */
  image: {
    height: 200,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#FF6B6B", // fallback caso imagem não carregue
  },

  /* FAIXA COM TÍTULO */
  labelContainer: {
    backgroundColor: "#8B2C2C",
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: -14,
  },

  labelText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  /* DESCRIÇÃO */
  infoContainer: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  infoText: {
    color: "#333",
    fontSize: 13,
  },
});
