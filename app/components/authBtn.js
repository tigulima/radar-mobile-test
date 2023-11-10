import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../config/colors";

export default function AuthButton({ title, onPress, color }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.coral.default,
        borderRadius: 30,

        height: 70,
        width: 360,

        justifyContent: "center",
        alignItems: "center",

        margin: 6,
    },
    txt: {
        color: colors.dark,
        fontSize: 20,
    },
});
