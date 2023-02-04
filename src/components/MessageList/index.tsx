import React from "react";
import { ScrollView } from "react-native";

import { Message } from "../Message";
import { styles } from "./styles";

export function MessageList() {
	const message = {
		id: "1",
		text: "mensagem",
		user: {
			name: "guilherme",
			avatar_url: "https://github.com/guilhermefigueira.png",
		},
	};
	return (
		<ScrollView
			contentContainerStyle={styles.content}
			keyboardShouldPersistTaps="never"
			style={styles.container}
		>
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
			<Message data={message} />
		</ScrollView>
	);
}
