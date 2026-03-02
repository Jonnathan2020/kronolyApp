import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgendamentoNovo from "../screens/AgendamentoNovo";
import AgendamentoHorario from "../screens/AgendamentoHorario";
import AgendamentoDados from "../screens/AgendamentoDados";
import AgendamentoConfirmacao from "../screens/AgendamentoConfirmacao";
import AgendamentoFinalizado from "../screens/AgendamentoFinalizado";


const Stack = createNativeStackNavigator();

export default function StackAgendamento() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AgendamentoNovo" component={AgendamentoNovo} />
      <Stack.Screen name="AgendamentoHorario" component={AgendamentoHorario} />
      <Stack.Screen name="AgendamentoDados" component={AgendamentoDados} />
      <Stack.Screen name="AgendamentoConfirmacao" component={AgendamentoConfirmacao} />
      <Stack.Screen name="AgendamentoFinalizado" component={AgendamentoFinalizado} />
    </Stack.Navigator>
  );
}
