import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProps } from "../types/navigation";
import { globalStyles } from "../styles/globalstyles";

export default function CartScreen({ navigation }: NavigationProps<"Cart">) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Cart Screen</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={globalStyles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Checkout")}>
        <Text style={globalStyles.buttonText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
