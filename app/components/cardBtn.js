import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../config/colors";

export default function CardBtn({ color, onPress, children }) {
    return (
        <View>
            <TouchableOpacity style={[styles.pageBtnBG, { backgroundColor: color }]} onPress={onPress}>
                <Text style={styles.pageBtnText}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    pageBtnBG: {
        backgroundColor: "black",
        borderRadius: 30,

        width: "100%",
        height: 50,

        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
    },
    pageBtnText: {
        color: colors.light,
        textAlign: "center",
        alignSelf: "center",
        fontSize: 18,
    },
});
