import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [loginMsg, setLoginMsg] = useState("");

    const login = () => {
        if (user === "vinson" && pass === "good") {
            setLoginMsg("");
            navigation.navigate("Home");
        } else {
            setLoginMsg("Wrong username or password!");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login screen</Text>
            <TextInput
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={styles.input}
                value={pass}
                onChangeText={setPass}
                secureTextEntry={true}
            />
            <Pressable
                onPress={login}
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    },
                    styles.button
                ]}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            {loginMsg ? <Text style={styles.msgText}>{loginMsg}</Text> : <></>}
        </View>
    )
}
4
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "cyan"
    },
    button: {
        backgroundColor: "black",
        padding: 8,
        margin: 8,
        width: 100,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        textAlign: "center"
    },
    input: {
        width: 250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    msgText: {
        color: "red"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default LoginScreen;