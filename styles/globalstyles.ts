import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

    header:{
     fontSize:25,
     fontWeight:"bold",
     marginTop:50,
     alignSelf:"center"
    },

    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: 200,
        alignItems: "center",
      },
      
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },

})