import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export default function App() {
  return (
  <PaperProvider>
    <View style={[styles.container, { 
          //backgroundColor, 
          justifyContent: "space-between", 
          paddingBottom: 20 }]}>
      <View>

      <Text style = {[globalstyles.HomeHeader]}>HOME PAGE</Text>
        
      </View>    


    </View>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
