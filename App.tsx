import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { globalStyles } from './styles/globalstyles';

export default function App() {
  return (
  <PaperProvider>
    <View style={[globalStyles.container, { 
          justifyContent: "space-between", 
          paddingBottom: 20 }]}>
      <View>

      <Text style = {[globalStyles.HomeHeader]}>HOME PAGE</Text>
        
      </View>    


    </View>

    </PaperProvider>
  );
}
