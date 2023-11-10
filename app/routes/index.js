import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";

import LoginScreen from "../pages/LoginScreen";
import ForgotScreen from "../pages/ForgotScreen";
import HomeScreen from "../pages/HomeScreen";
import ConfigScreen from "../pages/ConfigScreen";
import DoorScreen from "../pages/DoorScreen";

import { colors } from "../config/colors";

const Stack = createStackNavigator();

const customHeader = () => {
    return <Image source={require("../assets/logoHeader.png")} style={{ width: 140, height: 60 }} resizeMode="contain" />;
};

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: colors.light,
                headerTitle: customHeader,

                headerTransparent: true,
                headerBackground: () => <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />,

                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Config" component={ConfigScreen} />
            {/* <Stack.Screen name="Door" component={DoorScreen} /> */}

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forgot" component={ForgotScreen} />
        </Stack.Navigator>
    );
}
