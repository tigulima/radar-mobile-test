import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import { colors } from "../config/colors";

export default function Card({ type, placeHolder }) {
    return (
        <View>
            <TextInput style={styles.input} placeholder={placeHolder} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 70,
        width: 360,

        margin: 6,
        padding: 10,
        paddingLeft: 25,

        borderWidth: 1,
        borderRadius: 30,

        backgroundColor: colors.light,

        fontSize: 20,
    },
});
