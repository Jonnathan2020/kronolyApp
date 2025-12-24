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
    height: 200,
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
    fontSize: 13,
    marginBottom: 6,
  },

  price: {
    color: "#8B2C2C",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },

  /* BOTÃO */
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#FF6B6B",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 5,
  },

  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 15,
  },
});
