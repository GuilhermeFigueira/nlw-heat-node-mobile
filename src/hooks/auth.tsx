import React, { ReactNode, createContext, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { api } from "../services/api";

const CLIENT_ID = "91fff885750e33285e8d";
const SCOPE = "read:user";

type User = {
	id: string;
	avatar_url: string;
	name: string;
	login: string;
};

interface AuthContextData {
	user: User | null;
	isSingingIn: boolean;
	signIn: () => Promise<void>;
	logOut: () => Promise<void>;
}

interface AuthProviderProps {
	children: ReactNode;
}

interface AuthResponse {
	token: string;
	user: User;
}

type AuthorizationResponse = {
	params: {
		code?: string;
	};
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const [isSingingIn, setIsSingingIn] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	async function signIn() {
		setIsSingingIn(true);
		const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
		const { params } = (await AuthSession.startAsync({
			authUrl,
		})) as AuthorizationResponse;

		if (params && params.code) {
			const authResponse = await api.post("/authenticate", {
				code: params.code,
			});
			const { user, token } = authResponse.data as AuthResponse;

			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		}
		setIsSingingIn(false);
	}

	async function logOut() {}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				logOut,
				user,
				isSingingIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
