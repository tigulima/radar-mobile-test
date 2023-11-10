import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../config/colors";

export default function Card({ color, pillText, title, content, children }) {
    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
            {content ? <Text style={styles.content}>{content}</Text> : null}
            {pillText ? (
                <View style={styles.pill}>
                    <Text style={styles.pillText}>{pillText}</Text>
                </View>
            ) : null}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,

        width: "95%",
        minHeight: 100,

        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 20,
        margin: 8,
    },
    title: {
        fontSize: 20,
        marginLeft: 6,
        marginBottom: 14,
    },
    content: {
        fontSize: 14,
        marginLeft: 6,
        marginBottom: 14,
    },
    pill: {
        backgroundColor: "black",
        color: "white",

        borderRadius: 30,

        flex: 1,
        paddingTop: 3,
        paddingBottom: 5,
        paddingHorizontal: 8,

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        right: 20,
        top: 20,
    },

    pillText: {
        color: "white",
        fontSize: 12,
    },

    expandBtn: {
        backgroundColor: colors.gray.light2,
        borderRadius: 50,

        height: 35,
        width: 35,

        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
    },
});
