import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "../screens/Produtos";
import ProdutoAdicionar from "../screens/ProdutoAdicionar";
import ProdutoAdicionado from "../screens/ProdutoAdicionado";
import ProdutoEditar from "../screens/ProdutoEditar";


const Stack = createNativeStackNavigator();

export default function StackServico() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="ProdutoAdicionar" component={ProdutoAdicionar} />
      <Stack.Screen name="ProdutoAdicionado" component={ProdutoAdicionado} />
      <Stack.Screen name="ProdutoEditar" component={ProdutoEditar}/>
    </Stack.Navigator>
    
  );
}
