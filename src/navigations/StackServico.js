import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Servicos from "../screens/Servicos";
import ServicoAdicionar from "../screens/ServicoAdicionar";
import ServicoAdicionado from "../screens/ServicoAdicionado";


const Stack = createNativeStackNavigator();

export default function StackServico() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Servicos" component={Servicos} />
      <Stack.Screen name="ServicoAdicionar" component={ServicoAdicionar} />
      <Stack.Screen name="ServicoAdicionado" component={ServicoAdicionado} />
    </Stack.Navigator>
    
  );
}
