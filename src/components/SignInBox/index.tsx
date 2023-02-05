import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme/colors";

export function SignInBox() {
	return (
		<View style={styles.container}>
			<Button
				color={COLORS.BLACK_PRIMARY}
				backgroundColor={COLORS.YELLOW}
				icon="github"
			>
				ENTRAR COM O GITHUB
			</Button>
		</View>
	);
}
