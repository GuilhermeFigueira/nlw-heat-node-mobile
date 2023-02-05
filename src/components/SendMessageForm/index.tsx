import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme/colors";

export function SendMessageForm() {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				keyboardAppearance="dark"
				placeholder="Qual a sua expectativa para o evento"
			/>
			<Button color={COLORS.WHITE} backgroundColor={COLORS.PINK}>
				ENVIAR MENSAGEM
			</Button>
		</View>
	);
}
