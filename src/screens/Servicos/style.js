import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD",
  },

  card: {
    marginBottom: 24,
  },

  image: {
    height: 300,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#FF6B6B",
  },

  labelContainer: {
    backgroundColor: "#8B2C2C",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: -14,
  },

  labelText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  infoContainer: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },

  description: {
    color: "#444",
    fontSize: 14,
    marginBottom: 6,
    textAlign: "left",
  },

  price: {
    color: "#FF6B6B",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },

  /* BOTÃO */
  addButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "#eb6363",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 30,
    elevation: 5,
  },

  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 15,
  },
  card: {
    marginBottom: 24,
    borderRadius: 8,
    overflow: "hidden",
  },
  
  /* FAIXA INFERIOR */
  footerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#d15858",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  
  nomeServico: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  
  tempoTexto: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.9,
    marginTop: 2,
  },
  
  precoTexto: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconButtonEdit: {
    marginLeft: 0,
  },
  iconButtonDelete: {
    marginLeft: 40,
    marginRight: 20
  },
});
