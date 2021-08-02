import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../firebase/config";

const NoteCard = ({ item, noteContext }) => {
    const db = firebase.firestore();
    const { notes, setNotes } = noteContext;
    const deletePress = () => {
        db.collection("notes").doc(item.id).delete()
            .then(() => {
                setNotes([...notes].filter(note => item.id !== note.id));
            }).catch((error) => console.error("Error removing document: ", error));
    }

    return (
        <View style={styles.taskCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity style={styles.delete} onPress={deletePress}>
                <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
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
    },
    delete: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: "#1e1f22",
        width: 28,
        height: 28,
        borderRadius: 100
    },
    deleteText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
});
