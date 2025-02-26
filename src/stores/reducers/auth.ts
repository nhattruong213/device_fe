import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TAuthInfo } from '@/schemas/auth/infoRes';
import { TProfile, TToken } from '@/types/auth';

type TUserProps = {
  data: TProfile | null;
  token: TToken | null;
  isLoadedToken: boolean;
};
const initialState: TUserProps = {
  data: null,
  token: null,
  isLoadedToken: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TAuthInfo | null>) => {
      state.data = action.payload;
    },
    resetUser: (state) => {
      state.data = null;
    },
    setToken: (state, action: PayloadAction<TToken | null>) => {
      state.token = action.payload;
      state.isLoadedToken = true;
    },
    removeToken: (state) => {
      state.token = null;
    },
    removeUser: (state) => {
      state.data = null;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
