import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  accessToken: null,
  errorMsg: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
    //   state.isLoggedIn = true;
      state.user = action.payload.userEmail;
      console.log( action.payload )
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn=true;
    //   state.errorMsg = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
      state.errorMsg = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
      state.errorMsg = null;

    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
