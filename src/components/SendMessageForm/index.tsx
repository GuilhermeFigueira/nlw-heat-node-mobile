import React, { useState } from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme/colors";

export function SendMessageForm() {
	const [message, setMessage] = useState("");
	const [sendingMessage, setSendingMessage] = useState(false);
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				keyboardAppearance="dark"
				placeholder="Qual a sua expectativa para o evento"
				placeholderTextColor={COLORS.GRAY_PRIMARY}
				multiline
				maxLength={140}
				onChangeText={setMessage}
				value={message}
				editable={!sendingMessage}
			/>
			<Button color={COLORS.WHITE} backgroundColor={COLORS.PINK}>
				ENVIAR MENSAGEM
			</Button>
		</View>
	);
}
