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


  botao: {
    marginTop: 50,
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
