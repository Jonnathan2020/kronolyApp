import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f6fa"
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 20,
    color: "#333"
  },

  card: {
    width: "48%",
    height: 140,
    backgroundColor: "#FFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6
  },

  iconContainer: {
    marginBottom: 10
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333"
  }

});
