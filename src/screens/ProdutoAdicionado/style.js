import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* FUNDO ESCURECIDO */
  sucessoContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  /* CARD POPUP */
  popup: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 18,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    elevation: 6, // Android
    shadowColor: "#000", // iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  /* ÍCONE DE SUCESSO */
  iconeSucesso: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FF6B6B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  iconeTexto: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
  },

  /* TEXTO */
  textoSucesso: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },

  /* BOTÃO */
  botaoSecundario: {
    width: "100%",
    backgroundColor: "#FF6B6B",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
