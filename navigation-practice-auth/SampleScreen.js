import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SampleScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sample Page</Text>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    },
                    styles.button
                ]}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Back Home</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "violet"
    },
    button: {
        backgroundColor: "black",
        padding: 8,
        margin: 8,
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
});

export default SampleScreen;