import React, { createContext, useContext } from "react";

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

export const AuthContext = createContext({} as AuthContextData);
