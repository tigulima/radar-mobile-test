import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../config/colors";

import { StatusBar } from "expo-status-bar";

export default function Screen({ children }) {
    return (
        <ScrollView style={styles.background} contentContainerStyle={styles.container}>
            <StatusBar style="light" />
            <View style={styles.padding}></View>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 20,
    },
    background: {
        backgroundColor: colors.dark,
    },
    padding: {
        height: 100,
    },
});
