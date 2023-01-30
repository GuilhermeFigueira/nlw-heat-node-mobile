import { StyleSheet } from "react-native";
import { FONTS } from "../../theme/fonts";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 10,
	},
	logoutText: {
		fontSize: 15,
		fontFamily: FONTS.REGULAR,
		color: COLORS.WHITE,
	},
});
