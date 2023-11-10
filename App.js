import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/routes";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
