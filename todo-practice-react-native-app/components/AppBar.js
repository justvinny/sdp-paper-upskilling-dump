import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const AppBar = ({ appTitle }) => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>{appTitle}</Text>
        </View>
    )
}

export default AppBar;

const styles = StyleSheet.create({
    appBar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "stretch",
        height: "10%",
        backgroundColor: "#1e1f22",
        marginBottom: 8
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold"
    }
});
