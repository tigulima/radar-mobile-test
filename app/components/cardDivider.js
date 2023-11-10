import React from "react";
import { View, StyleSheet } from "react-native";

import { colors } from "../config/colors";

export default function CardDivider() {
    return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: colors.gray.light1,

        height: 1,
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        marginVertical: 15,
    },
});
