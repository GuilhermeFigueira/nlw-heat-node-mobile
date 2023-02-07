import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme/colors";
import { useAuth } from "../../hooks/auth";

export function SignInBox() {
	const { signIn } = useAuth();

	return (
		<View style={styles.container}>
			<Button
				color={COLORS.BLACK_PRIMARY}
				backgroundColor={COLORS.YELLOW}
				icon="github"
				onPress={signIn}
			>
				ENTRAR COM O GITHUB
			</Button>
		</View>
	);
}
