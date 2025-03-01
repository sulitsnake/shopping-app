import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProps } from "../types/navigation";
import { globalStyles } from "../styles/globalstyles";

export default function CheckoutScreen({ navigation }: NavigationProps<"Checkout">) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Checkout Screen</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={globalStyles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Cart")}>
        <Text style={globalStyles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
