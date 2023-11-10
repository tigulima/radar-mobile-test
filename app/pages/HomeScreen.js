import { useState, useEffect } from "react";
import { Button, Text, StyleSheet, ScrollView } from "react-native";
import * as FileSystem from "expo-file-system";

import base64 from "react-native-base64";

import Card from "../components/card";
import CardPageBtn from "../components/cardPageBtn";
import CardExpand from "../components/cardExpand.js";

import Screen from "../components/screen";
import Header from "../components/header";
import Search from "../components/search";
import DividerDot from "../components/dividerDot";

import { colors } from "../config/colors";

export default function Home({ navigation }) {
    const [finalJson, setFinalJson] = useState(null);
    // useEffect(() => {
    //     fetchDataAndSaveToFile();
    // }, []);

    const fetchDataAndSaveToFile = async () => {
        setFinalJson("fetching...");

        const url = "http://10.0.0.33/status.json";

        const username = "admin";
        const password = "Techmobi";

        const headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode(username + ":" + password));

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((response) => {
                if (!response.ok) {
                    setFinalJson("Network response was not ok");
                    throw new Error("Network response was not ok");
                } else {
                    const data = response.json();

                    // Extract the values from the fetched data
                    const { info, uptime, status_sensores: sensorStatus } = data;

                    // Prepare the data to be saved in the local file
                    const configData = {
                        app: {
                            version: "0.0.1",
                        },
                        popProtect: {
                            alarm: sensorStatus.status_rede !== "0", // Set alarm based on status_rede
                            uptime: {
                                day: parseInt(uptime.dia),
                                hour: parseInt(uptime.hora),
                                minute: parseInt(uptime.min),
                                second: parseInt(uptime.seg),
                            },
                            sensor: {
                                internal_temp: parseInt(sensorStatus.temp_interna),
                                external_temp: parseInt(sensorStatus.temp_externa),
                                energy: parseFloat(sensorStatus.alimentacao),
                            },
                            version: info.versao_so,
                        },
                    };

                    // Convert the config data to JSON
                    const configJson = JSON.stringify(configData, null, 2);
                    setFinalJson(configJson.toString());

                    // Save the JSON data to the local file
                    const configFilePath = FileSystem.documentDirectory + "/data/config.json";
                    FileSystem.writeAsStringAsync(configFilePath, configJson);

                    console.log("Config data saved:", configData);
                }
            })
            .catch((error) => {
                setFinalJson(error.toString());
                console.error("Error:", error);
            });
    };

    return (
        <Screen>
            <Search />
            <Header date={true}>Início</Header>

            <Card pillText={"card"} color={colors.light} title="Title card">
                <CardExpand />
            </Card>

            <DividerDot />

            <Card
                pillText={"página"}
                color={colors.jade.default}
                title="Porta"
                content="Configure a ação da sirene caso a porta  do dispositivo seja aberta."
                onPress={() => navigation.navigate("ConfigDoor")}
            >
                <CardPageBtn onPress={() => navigation.navigate("Door")} />
            </Card>
            <Card
                pillText={"página"}
                color={colors.coral.default}
                title="Fonte"
                content="Monitore e gerencie a fonte de alimentação e no break do dispositivo."
            >
                <CardPageBtn onPress={() => {}} />
            </Card>
            <Card
                pillText={"página"}
                color={colors.lavander.default}
                title="Camera"
                content="Descrição da página que este card leva ou a função que ele exerce."
            >
                <CardPageBtn onPress={() => {}} />
            </Card>
            {/* <Button title="Fetch JSON" onPress={fetchDataAndSaveToFile} /> */}
            {/* <Text style={{ color: colors.light }}>{finalJson}</Text> */}
        </Screen>
    );
}
