import React, { useCallback } from "react";
import { Home } from "./src/screens/Home";
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	return (
		<>
			<StatusBar
				style="light"
				translucent
				backgroundColor="transparent"
			/>
			{fontsLoaded ? <Home /> : !SplashScreen.hideAsync()}
		</>
	);
}
