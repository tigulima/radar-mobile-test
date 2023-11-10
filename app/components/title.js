import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../config/colors";

export default function Title({ date, children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
            {date ? (
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.divider} />
                    <Text style={styles.info}>acessado em dd/mm/aa {"\n"}às hh/mm</Text>
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",

        justifyContent: "flex-start",
        alignItems: "center",

        width: "90%",

        margin: 25,
    },
    divider: {
        backgroundColor: colors.light,
        height: 25,
        width: 1,

        marginHorizontal: 10,
        marginTop: 15,
    },
    title: {
        color: colors.light,
        fontSize: 36,
        fontWeight: "bold",
    },
    info: {
        marginTop: 10,
        color: colors.light,
    },
});
