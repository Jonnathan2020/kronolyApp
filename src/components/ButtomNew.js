import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Entypo} from "@expo/vector-icons"

export default function ButtomNew({focused, size}){
    return(
       <View style={[styles.container, { backgroundColor: focused ? "#e85f5f" : "#FF6B6B"} ]}>
        <Entypo name="plus" color={focused? "#FFFF" : "#e3e3e3"} size={size}  />
       </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        width:80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    }
})