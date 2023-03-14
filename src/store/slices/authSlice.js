import { createSlice } from "@reduxjs/toolkit";
import { signUp, login } from "../../services/user"
import jwtDecode from "jwt-decode";

const user = localStorage.getItem('token')
  ? jwtDecode(localStorage.getItem("token"))
  : null

const initialState = {
  user: user ? user.user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
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
      localStorage.removeItem("token");
    },
  },
    extraReducers: (builder) => {
      builder
        .addCase(signUp.pending, (state) => {
          state.isLoading = true
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(signUp.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
