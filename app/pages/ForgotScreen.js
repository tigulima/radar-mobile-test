import { View, Text, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";

import Input from "../components/authInput";
import AuthButton from "../components/authBtn";

import { info } from "../config/info";
import { colors } from "../config/colors";

export default function Auth({ navigation }) {
    const emailSentAlert = () => {
        Alert.alert(
            "Email enviado",
            "Um email foi enviado para o endereço informado com as instruções para a recuperação da senha.",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("Auth"),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.containerScroll} keyboardShouldPersistTaps="handled">
                <StatusBar style="light" />
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/logoHeader.png")} style={styles.logoImg} />
                    <View>
                        <Text style={styles.version}>{info.app.version}</Text>
                    </View>
                </View>
                <Input placeHolder="Email" />
                <AuthButton title="Enviar" color={colors.coral} onPress={emailSentAlert} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: colors.dark,
    },
    containerScroll: {
        flex: 1,

        justifyContent: "flex-start",
        alignItems: "center",
    },
    logoContainer: {
        flex: 1,

        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",

        paddingTop: 10,

        maxHeight: "50%",
    },
    logoImg: {
        width: 170,
        height: 25,
    },
    version: {
        fontSize: 12,
        margin: 10,
        color: colors.gray.dark1,
    },
});
