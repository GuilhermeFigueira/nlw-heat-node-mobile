import React from "react";
import {
	TouchableOpacity,
	TouchableOpacityProps,
	Text,
	ColorValue,
	ActivityIndicator,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	children: string;
	color: ColorValue;
	backgroundColor: ColorValue;
	icon?: React.ComponentProps<typeof AntDesign>["name"];
	isLoading?: boolean;
};

export function Button({
	children,
	color,
	backgroundColor,
	icon,
	isLoading = false,
	...rest
}: Props) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor }]}
			activeOpacity={0.5}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator color={color} />
			) : (
				<>
					<AntDesign name={icon} size={24} style={styles.icon} />
					<Text style={[styles.title, { color }]}>{children}</Text>
				</>
			)}
		</TouchableOpacity>
	);
}
