import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Agenda from "./screens/Agenda";
import Produtos from "./screens/Produtos";
import Servicos from "./screens/Servicos";
import StackAgendamento from "./navigations/StackAgendamento";
import {Entypo} from "@expo/vector-icons"
import ButtomNew from "./components/ButtomNew";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator initialRouteName="Agenda" component={Agenda}
          screenOptions={{
            tabBarStyle:{
                backgroundColor: "#C8C6C6",
                borderTopColor: "transparent",
                paddingTop: 0,
                paddingBottom: 5,
                marginBottom: 20,
            },
              tabBarActiveBackgroundColor:"#F000",
              tabBarActiveTintColor: "#FFFF",
          }}
        >
            <Tab.Screen name="Inicio" component={Home}
               options={{
                  tabBarIcon: ({size, color})=>(
                     <Entypo name="home" size={size} color={color} />
                  )
               }}
            />

            <Tab.Screen name="Agenda" component={Agenda}
               options={{
                tabBarIcon: ({size, color})=>(
                   <Entypo name="calendar" size={size} color={color} />
                )
             }}
            />
            
            <Tab.Screen name="Agendamento" component={StackAgendamento}
               options={{
                tabBarLabel:"",
                tabBarIcon: ({focused, size, color})=>(
                    <ButtomNew size={size} color={color} focused={focused} />
                )
             }}
            />        

            <Tab.Screen name="Produtos" component={Produtos}
               options={{
                tabBarIcon: ({size, color})=>(
                   <Entypo name="shopping-cart" size={size} color={color} />
                )
             }}
            />

            <Tab.Screen name="Serviços" component={Servicos}
               options={{
                tabBarIcon: ({size, color})=>(
                   <Entypo name="shop" size={size} color={color} />
                )
             }}
            />
            
        </Tab.Navigator>
    )
}
