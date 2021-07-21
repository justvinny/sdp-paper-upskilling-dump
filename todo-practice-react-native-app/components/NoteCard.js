import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NoteCard = ({ item }) => {
    return (
        <View style={styles.taskCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    )
}

export default NoteCard;

const styles = StyleSheet.create({
    taskCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        padding: 8
    },
    title: {
        fontWeight: "bold",
        marginBottom: 8
    }
});
