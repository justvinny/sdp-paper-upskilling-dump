import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useState } from "react";
import firebase from "./firebase";

let isError = false;

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [loginMsg, setLoginMsg] = useState("");
    const [isLoading, setLoading] = useState(false);

    const login = () => {
        isError = false;
        setLoading(true);
        setLoginMsg("Loading...");
        console.log("Hello");
        firebase.auth().signInWithEmailAndPassword(user, pass)
            .then((userCredential) => {
                console.log(userCredential.user, ", hello!");
                setLoginMsg("Login success!");
                setTimeout(() => {
                    setLoading(false);
                    setLoginMsg("");
                    navigation.navigate("Home");
                }, 1000);
            })
            .catch((error) => {
                isError = true;
                setLoading(false);
                setLoginMsg(error.message);
            });
    }

    const signUp = () => {
        navigation.navigate("SignUp");
    }

    const loginMessage = () => {
        if (isError) {
            return <Text style={styles.errorMsg}>{loginMsg}</Text>;
        }

        return (
            <Text style={styles.msgText}>{loginMsg}</Text>
        );
    }

    const submitBtn = () => {
        if (isLoading) {
            return (
                <>
                    <Pressable
                        disabled={true}
                        style={[{ opacity: 0.5 }, styles.button]}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                    <Pressable
                        disabled={true}
                        style={[{ opacity: 0.5 }, styles.button]}
                    >
                        <Text style={styles.buttonText}>Sign-up</Text>
                    </Pressable>
                </>
            )
        }

        return (
            <>
                <Pressable
                    disabled={false}
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
                <Pressable
                    disabled={false}
                    onPress={signUp}
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        },
                        styles.button
                    ]}
                >
                    <Text style={styles.buttonText}>Sign-up</Text>
                </Pressable>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login screen</Text>
            <TextInput
                style={styles.input}
                value={user}
                onChangeText={setUser}
                placeholder="E-mail"
            />
            <TextInput
                style={styles.input}
                value={pass}
                onChangeText={setPass}
                secureTextEntry={true}
                placeholder="Passworwd"
            />
            {submitBtn()}
            {loginMessage()}
        </View>
    )
}

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
        width: "80%",
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        textAlign: "center"
    },
    input: {
        width: "80%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    msgText: {
        color: "green"
    },
    errorMsg: {
        color: "red"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default LoginScreen;