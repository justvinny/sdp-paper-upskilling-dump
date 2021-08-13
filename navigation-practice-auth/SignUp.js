import React, { useState } from "react";
import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import firebase from "./firebase";

const SignUp = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [registerMsg, setRegisterMsg] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const clearFields = () => {
        setUser("");
        setPass("");
    }

    const register = () => {
        setLoading(true);
        setIsError(false);
        setRegisterMsg("Registering...");
        firebase.auth().createUserWithEmailAndPassword(user, pass)
            .then((userCredential) => {
                setRegisterMsg("Successfully registered!")
                clearFields();
            })
            .catch((error) => {
                setIsError(true);
                setRegisterMsg(error.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const backToLogin = () => {
        setRegisterMsg("");
        navigation.navigate("Login");
    }

    const registerBtn = () => {
        if (isLoading) {
            return (
                <>
                    <Pressable
                        disabled={true}
                        style={[{ opacity: 0.5 }, styles.button]}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                    <Pressable
                        disabled={true}
                        style={[{ opacity: 0.5 }, styles.button]}
                    >
                        <Text style={styles.buttonText}>Back to Login</Text>
                    </Pressable>
                </>
            )
        }

        return (
            <>
                <Pressable
                    disabled={false}
                    onPress={register}
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        },
                        styles.button
                    ]}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <Pressable
                    disabled={false}
                    onPress={backToLogin}
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.5 : 1
                        },
                        styles.button
                    ]}
                >
                    <Text style={styles.buttonText}>Back to Login</Text>
                </Pressable>
            </>
        )
    }

    const registerFeedback = () => {
        if (isError) {
            return <Text style={styles.errorMsg}>{registerMsg}</Text>;
        }

        return <Text style={styles.msgText}>{registerMsg}</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register Account Page</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={pass}
                onChangeText={setPass}
                secureTextEntry={true}
            />
            {registerBtn()}
            {registerFeedback()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow"
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
        padding: 10
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

export default SignUp;