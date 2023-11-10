import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from "react-native";

import Input from "../components/authInput";
import AuthButton from "../components/authBtn";

import { info } from "../config/info";
import { colors } from "../config/colors";

export default function Auth({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={75}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <StatusBar style="light" />
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/logoHeader.png")} style={styles.logoImg} />
                    <View>
                        <Text style={styles.appVersion}>{info.app.version}</Text>
                    </View>
                </View>
                <View>
                    <Input placeHolder="Email" />
                    <Input placeHolder="Senha" />
                </View>
                <View style={styles.forgotContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                        <Text style={styles.forgot}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <AuthButton title="Entrar" onPress={() => navigation.navigate("Home")} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: colors.dark,
        paddingBottom: 20,
    },
    containerScroll: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    logoImg: {
        width: 170,
        height: 25,
    },
    appVersion: {
        fontSize: 12,
        margin: 10,
        color: colors.gray.dark1,
    },
    forgotContainer: {
        flex: 1,

        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
    },
    forgot: {
        color: colors.light,
        fontSize: 18,
        padding: 10,
    },
});
