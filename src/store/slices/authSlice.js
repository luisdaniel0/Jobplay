import { createSlice } from "@reduxjs/toolkit";
// import {register, login, logout} from ".."

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
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
    extraReducers: (builder) => {
      builder
        // .addCase(register.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(register.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.user = action.payload
        // })
        // .addCase(register.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        //   state.user = null
        // })
        // .addCase(login.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(login.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.user = action.payload
        // })
        // .addCase(login.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        //   state.user = null
        // })
        // .addCase(logout.fulfilled, (state) => {
        //   state.user = null
        //   state.token = null;
        //   localStorage.removeItem("token");
        // })
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
