import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Svg, { Path, Circle } from "react-native-svg";
import { colors } from "../config/colors";

export default function Search({ type, color, title, content, onPress }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Pesquisar" placeholderTextColor={colors.gray.light1} />
                <View style={styles.svg}>
                    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <Path
                            d="M21.414,18.586c-0.287-0.287-1.942-1.942-2.801-2.801c-0.719,1.142-1.686,2.109-2.828,2.828 c0.859,0.859,2.514,2.514,2.801,2.801c0.781,0.781,2.047,0.781,2.828,0C22.195,20.633,22.195,19.367,21.414,18.586z"
                            fill="#EFA949"
                        />
                        <Circle cx="11" cy="11" r="9" opacity=".35" fill="#EFA949" />
                    </Svg>
                </View>
            </View>
            <TouchableOpacity style={styles.configContainer} onPress={() => navigation.navigate("Config")}>
                <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 24 24" width="28px" height="28px">
                    <Path
                        d="M16,18.928c0.678-0.391,1.459-0.424,2.135-0.164c0.564,0.217,1.209,0.037,1.592-0.43 c0.683-0.833,1.234-1.778,1.621-2.805c0.221-0.587,0.012-1.232-0.467-1.638C20.342,13.437,20,12.761,20,12 c0-0.761,0.342-1.437,0.88-1.893c0.479-0.406,0.689-1.05,0.467-1.638c-0.387-1.026-0.937-1.972-1.621-2.805 c-0.383-0.467-1.028-0.647-1.592-0.43C17.459,5.496,16.678,5.463,16,5.072c-0.68-0.393-1.1-1.056-1.21-1.775 c-0.09-0.588-0.556-1.058-1.143-1.158C13.111,2.048,12.561,2,12,2s-1.111,0.048-1.647,0.139C9.766,2.239,9.301,2.709,9.21,3.297 C9.1,4.016,8.68,4.679,8,5.072C7.322,5.463,6.541,5.496,5.865,5.235c-0.564-0.217-1.209-0.037-1.592,0.43 C3.59,6.498,3.04,7.443,2.653,8.47C2.431,9.057,2.641,9.702,3.12,10.107C3.658,10.563,4,11.239,4,12c0,0.761-0.342,1.437-0.88,1.893 c-0.479,0.406-0.689,1.05-0.467,1.638c0.387,1.026,0.937,1.972,1.621,2.805c0.383,0.467,1.028,0.647,1.592,0.43 C6.541,18.504,7.322,18.537,8,18.928c0.68,0.393,1.1,1.056,1.21,1.775c0.09,0.588,0.556,1.058,1.143,1.158 C10.889,21.952,11.439,22,12,22s1.111-0.048,1.647-0.139c0.587-0.099,1.053-0.569,1.143-1.158C14.9,19.984,15.32,19.321,16,18.928z"
                        opacity=".35"
                        fill="#F2F2F2"
                    />
                    <Path d="M12,8c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S14.209,8,12,8z" fill="#F2F2F2" />
                </Svg>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "95%",

        marginVertical: 20,

        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-between",

        flexDirection: "row",
    },
    inputContainer: {
        flex: 1,

        flexDirection: "row",
        justifyContent: "space-between",

        borderRadius: 30,
        backgroundColor: colors.gray.dark1,

        height: 42,

        paddingLeft: 20,
        paddingRight: 10,
        marginRight: 8,
    },
    svg: {
        marginBottom: 2,
        alignSelf: "center",
        justifyContent: "center",
    },
    input: {
        color: colors.light,
        flex: 1,
    },
    configContainer: {
        height: 42,
        width: 42,

        borderRadius: 50,
        backgroundColor: colors.gray.dark1,

        justifyContent: "center",
        alignItems: "center",
    },
});
