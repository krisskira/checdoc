import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

export interface AuthState {
  user?: {
    username: string;
    email: string;
  };
  token?: string;
}

const AuthInitialState: AuthState = {
  user: undefined,
  token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: AuthInitialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
    login: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;
