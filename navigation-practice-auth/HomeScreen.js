import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world! This is the home screen!</Text>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    },
                    styles.button
                ]}
                onPress={() => navigation.navigate("Sample")}>
                <Text style={styles.buttonText}>Sample Page</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    },
                    styles.button
                ]}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },
    button: {
        backgroundColor: "black",
        padding: 8,
        margin: 8,
        marginBottom: 0,
        width: 200,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        textAlign: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default HomeScreen;