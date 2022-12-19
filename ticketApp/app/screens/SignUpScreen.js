import { Text, SafeAreaView, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import colorScheme from "../config/colorScheme";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputView}> 
        <TextInput
            style={styles.input}
            // onChangeText={onChange}
            // value={value}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            placeholderTextColor="#759B7D"
        />
      </View>

      <View style={styles.inputView}> 
        <TextInput
            style={styles.input}
            // onChangeText={onChange}
            // value={value}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor="#759B7D"
            secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        color: colorScheme.primary,
        fontSize: 45,
        fontWeight: '400',
        marginTop: 170,
        marginVertical: 70,
    },
    inputView: {
        borderBottomWidth: 2,
        borderBottomColor: colorScheme.primary,
        width: "70%",
        height: 45,
        marginBottom: 30
    },
    input: {
        height: 50,
        fontSize: 17,
        color: colorScheme.primary
    },
    errorMes: {
        marginTop: -15,
        marginBottom: 5
    },
    signupBtn: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        height: 55,
        marginTop: 50,
        backgroundColor: colorScheme.primary,
    },
    signupText: {
        fontSize: 25,
        color: 'white',
        textAlign: "center"
    }
})