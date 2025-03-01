import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProps } from "../types/navigation";

export default function HomeScreen({ navigation }: NavigationProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Checkout")}>
        <Text style={styles.buttonText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, marginVertical: 5, width: 200, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
