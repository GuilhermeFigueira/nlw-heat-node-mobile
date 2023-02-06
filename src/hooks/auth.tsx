import React, { ReactNode, createContext, useContext, useState } from "react";

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

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const [isSingingIn, setIsSingingIn] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	async function signIn() {}

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
