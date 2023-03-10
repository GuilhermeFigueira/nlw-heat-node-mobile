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
	logoutButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	logoutText: {
		fontSize: 15,
		fontFamily: FONTS.REGULAR,
		color: COLORS.WHITE,
		marginRight: 20,
	},
});
