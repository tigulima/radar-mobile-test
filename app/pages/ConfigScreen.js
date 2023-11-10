import React from "react";
import { Linking } from "react-native";

import Screen from "../components/screen";
import Title from "../components/title";
import Card from "../components/card";

import CardBtn from "../components/cardBtn";

import { colors } from "../config/colors";
import Header from "../components/header";

export default function Config({ navigation }) {
    return (
        <Screen>
            <Header>Ajustes</Header>
            <Card
                color={colors.light}
                title="Ajustes do app"
                content="Este espaço está reservado para os ajustes do aplicativo, como themas, preferencias, etc."
                onPress={() => {}}
            >
                <CardBtn color={colors.dark} onPress={() => Linking.openSettings()}>
                    Abrir configurações
                </CardBtn>
            </Card>
            <Title>User</Title>
            <Card
                color={colors.light}
                title="Ajustes do usuário"
                content="Este espaço está reservado para os ajustes do usuário, como contato, foto de perfil, etc."
                onPress={() => {}}
            ></Card>
            <Title>Debug</Title>
            <Card
                color={colors.light}
                title="Enviar logs"
                content="Envia informações relevantes sobre o estado do aplicativo para que os desenvolvedores possam revolver problemas."
                onPress={() => {}}
            >
                <CardBtn color={colors.coral.default}>Enviar</CardBtn>
            </Card>
        </Screen>
    );
}
