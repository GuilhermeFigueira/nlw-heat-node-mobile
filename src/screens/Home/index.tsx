import React from "react";

import { styles } from "./styles";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageList } from "../../components/MessageList";

export function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<MessageList />
		</SafeAreaView>
	);
}
