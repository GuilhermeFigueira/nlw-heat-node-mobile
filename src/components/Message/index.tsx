import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { UserPhoto } from "../UserPhoto";

export interface MessageProps {
	id: string;
	text: string;
	user: {
		name: string;
		avatar_url: string;
	};
}

type Props = {
	data: MessageProps;
};

export function Message({ data }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.message}>{data.text}</Text>

			<View style={styles.footer}>
				<UserPhoto sizes="SMALL" imageUri={data.user.avatar_url} />

				<Text style={styles.userName}>{data.user.name}</Text>
			</View>
		</View>
	);
}
