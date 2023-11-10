import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Svg, { Path } from "react-native-svg";

import { colors } from "../config/colors";

export default function CardExpand({ onPress }) {
    return (
        <View>
            <View>
                <Text style={styles.contractText}>Contrato tal de numsei quem</Text>
                <Text style={styles.bulletList}>
                    {`\u2022`} Ativado em <Text style={{ color: colors.gray.dark1 }}>dd/mm/aa</Text>
                </Text>
                <Text style={styles.bulletList}>
                    {`\u2022`} Instalado por <Text style={{ color: colors.gray.dark1 }}>Fulano de Tal</Text>
                </Text>
                <Text style={styles.bulletList}>
                    {`\u2022`} Última perícia por <Text style={{ color: colors.gray.dark1 }}>Fulano de Tal</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.pageBtn} onPress={onPress}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <Path
                        d="M7.121,6.879c-1.171-1.172-3.071-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l7,7 C10.465,18.707,11.232,19,12,19v-7.243L7.121,6.879z"
                        opacity=".35"
                        fill="#202026"
                    />
                    <Path
                        d="M21.121,11.121C21.707,10.536,22,9.768,22,9s-0.293-1.536-0.879-2.121c-1.171-1.172-3.071-1.172-4.242,0L12,11.757V19 c0.768,0,1.535-0.293,2.121-0.879L21.121,11.121z"
                        fill="#202026"
                    />
                </Svg>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    pageBtnBG: {
        backgroundColor: "black",
        borderRadius: 30,

        padding: 4,
    },

    pageBtn: {
        backgroundColor: colors.gray.light2,
        borderRadius: 50,

        height: 35,
        width: 35,

        flexDirection: "row",
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
    },

    pageBtnText: {
        color: "white",
        textAlign: "center",
        padding: 8,
    },
    contractText: {
        fontSize: 14,
        marginVertical: 10,
    },
    bulletList: {
        fontSize: 13,
        marginLeft: 10,
    },
});
