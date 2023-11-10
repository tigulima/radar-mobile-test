import React, { useState } from "react";
import { Linking } from "react-native";

import axios from "axios";
import base64 from "react-native-base64";

import Card from "../components/card";
import CardDivider from "../components/cardDivider";
import CardConfigSwitch from "../components/cardConfigSwitch";
import CardBtn from "../components/cardBtn";

import Screen from "../components/screen";
import Header from "../components/header";
import { colors } from "../config/colors";
import { request } from "../config/request";

export default function Door() {
    const [alarm, setAlarm] = useState(false);
    const [debug, setDebug] = useState("");

    const toggleAlarm = async () => {
        setAlarm(!alarm);

        const instanceAxios = axios.create({
            baseUrl: request.popProtect.base,
        });

        let url = "";
        const username = "admin";
        const password = "Techmobi";

        // const headers = new Headers();
        // headers.append("Authorization", "Basic " + base64.encode(username + ":" + password));

        if (alarm) url = request.popProtect.disableDoorAlarm;
        else url = request.popProtect.enableDoorAlarm;

        await instanceAxios
            .get(url, { headers: { Authorization: "Basic " + base64.encode(username + ":" + password) } })
            .then((response) => {
                console.log(response);
                setDebug(debug + "\n" + "Response: " + response.toString());
            })
            .catch((error) => {
                console.log(error);
                setDebug(debug + "\n" + "Error: " + error.toString());
            });
    };

    const openUrlWithBasicAuth = () => {
        const url = "http://10.0.0.33/alarme.htm?op=0&ativar=false&tdisp=10&trearm=5&trele=0";

        Linking.openURL(url)
            .then(() => {
                console.log("Opened successfully");
                setDebug(debug + "\n" + "Opened successfully");
            })
            .catch((error) => {
                console.error("Error opening URL:", error);
                setDebug(debug + "\n" + "Error opening URL: " + error.toString());
            });
    };

    return (
        <Screen>
            <Header>Porta</Header>
            <Card
                pillText={"configuração"}
                color={colors.light}
                title="Alarme"
                content="Ative ou desative o disparo da sirene na abertura da porta do dispositivo."
            >
                {/* <CardConfigSwitch title={"Alarme da porta"} onValueChange={toggleAlarm} value={alarm} /> */}
                <CardDivider />
                <CardBtn color={colors.dark} onPress={openUrlWithBasicAuth}>
                    Configurar alarme
                </CardBtn>
            </Card>
            <Card pillText={"Debug"} color={colors.light} title="Logs do sistema" content={debug}></Card>
        </Screen>
    );
}
