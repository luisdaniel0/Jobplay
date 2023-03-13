import { createSlice } from "@reduxjs/toolkit";
import {register, login} from "../../services/user"

const token = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      state.user = null
      state.token = null;
      localStorage.removeItem("token");
    },
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
          state.token = payload.token;
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
          state.token = payload.token;
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
          state.token = payload.token;
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
          state.token = payload.token;
        })
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
