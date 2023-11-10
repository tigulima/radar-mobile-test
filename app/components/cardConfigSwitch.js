import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

import { colors } from "../config/colors";

export default function CardConfigSwitch({ title, onValueChange, value }) {
    return (
        <View>
            <View style={styles.container}>
                <Text>{title}</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: colors.dark, true: colors.jade.default }}
                    thumbColor={colors.light}
                    ios_backgroundColor={colors.dark}
                    onValueChange={onValueChange}
                    value={value}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 6,
    },
    switchs: {
        elevation: 5,
        shadowColor: colors.dark,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
});
