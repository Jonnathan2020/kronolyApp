import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     /* ===== CONTAINER PRINCIPAL ===== */
  containerNovo: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  /* ===== TÍTULOS ===== */
  textTitulo: {
    color: "#3e3e1e",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  calendarHeader: {
    backgroundColor: "#3e3e1e",
    paddingTop: 10,
    paddingBottom: 8,
    alignItems: "center",
  },
  
  calendarHeaderText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
  },
  
  calendarHeaderLine: {
    marginTop: 6,
    height: 2,
    width: "100%",
    backgroundColor: "#FF6B6B",
  },
  
  calendarioMockup: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 30,
  },
  

    /* ===== BOTÃO ===== */
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
    textTransform: "uppercase",
  },

});

export default styles;