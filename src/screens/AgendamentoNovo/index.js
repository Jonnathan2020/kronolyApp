import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar, calendarTheme } from "react-native-calendars";
import { todayString } from "react-native-calendars/src/expandableCalendar/commons";
import styles from "./style";

export default function AgendamentoNovo({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(todayString);

  return (
    <View style={styles.containerNovo}>
      <Text style={styles.textTitulo}>Selecione a data</Text>

      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#FF6B6B",
          },
        }}
        theme={calendarTheme}
        style={styles.calendarioMockup}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          console.log("📤 ENVIANDO DATA:", selectedDate);
        
          navigation.navigate("AgendamentoHorario", {
            data: selectedDate,
          });
        }}
      >
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

