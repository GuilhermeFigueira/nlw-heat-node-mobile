import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";

export default function Header() {
	return (
		<View style={styles.container}>
			<LogoSvg />

			<UserPhoto imageUri="https://github.com/guilhermefigueira.png" />
			<TouchableOpacity>
				<Text style={styles.logoutText}>Sair</Text>
			</TouchableOpacity>
		</View>
	);
}
