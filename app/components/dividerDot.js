import React from "react";
import { View, StyleSheet } from "react-native";

import { colors } from "../config/colors";

export default function DividerDot() {
    return <View style={styles.dot} />;
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: colors.light,
        borderRadius: 30,

        height: 10,
        width: 10,

        justifyContent: "center",
        alignItems: "center",

        margin: 10,
    },
});
