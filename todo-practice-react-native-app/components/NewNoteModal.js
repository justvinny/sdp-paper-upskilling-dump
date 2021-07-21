import React from "react";
import { Modal, Text, TextInput, StyleSheet, TouchableOpacity, Button, KeyboardAvoidingView, Platform } from "react-native";

const NewNoteModal = ({ visible, newTitle, setNewTitle, newDescription, setNewDescription, addNote, closeModal }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <TouchableOpacity style={styles.container} onPress={closeModal}>
                <TouchableOpacity style={styles.modal}>
                    <KeyboardAvoidingView style={styles.avoidingView} behavior="height">
                        <Text style={styles.header}>Enter new note</Text>
                        <TextInput
                            style={styles.title}
                            placeholder="Enter note title"
                            value={newTitle}
                            onChangeText={setNewTitle}
                        />
                        <TextInput
                            style={styles.description}
                            placeholder="Enter description"
                            multiline={true}
                            numberOfLines={4}
                            value={newDescription}
                            onChangeText={setNewDescription}
                        />
                        <TouchableOpacity style={styles.save} onPress={addNote}>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

export default NewNoteModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    avoidingView: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: 250,
        backgroundColor: "#fff"
    },
    header: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 8
    },
    modal: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "80%",
        height: 250
    },
    title: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        marginTop: 12
    },
    description: {
        width: "80%",
        height: 100,
        borderWidth: 1,
        marginTop: 12,
    },
    save: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1f22",
        padding: 8,
        marginTop: 8,
        width: 100
    },
    saveText: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})