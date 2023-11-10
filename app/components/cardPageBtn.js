import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Svg, { Path } from "react-native-svg";

export default function CardPageBtn({ onPress }) {
    return (
        <View>
            <TouchableOpacity style={styles.pageBtnBG} onPress={onPress}>
                <Text style={styles.pageBtnText}>Ir à página</Text>
                <View style={styles.pageBtn}>
                    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <Path
                            d="M6.879,7.121c-1.172-1.171-1.172-3.071,0-4.242c1.171-1.172,3.071-1.172,4.242,0l7,7 C18.707,10.465,19,11.232,19,12h-7.243L6.879,7.121z"
                            opacity=".35"
                            fill="#202026"
                        />
                        <Path
                            d="M11.121,21.121C10.536,21.707,9.768,22,9,22s-1.536-0.293-2.121-0.879c-1.172-1.171-1.172-3.071,0-4.242L11.757,12H19 c0,0.768-0.293,1.535-0.879,2.121L11.121,21.121z"
                            fill="#202026"
                        />
                    </Svg>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    pageBtnBG: {
        backgroundColor: "black",
        borderRadius: 30,

        padding: 4,

        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "center",
    },

    pageBtn: {
        backgroundColor: "white",
        borderRadius: 50,

        height: 35,
        width: 35,

        justifyContent: "center",
        alignItems: "center",
    },

    pageBtnText: {
        color: "white",
        textAlign: "center",
        padding: 8,
    },
});
