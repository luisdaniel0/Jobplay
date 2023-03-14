import api from "./apiConfig";
import jwtDecode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const signUp = createAsyncThunk("auth/signup", async (credentials) => {
  try {
    const { data } = await api.post(`/api/auth/signup/`, credentials);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
});

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await api.post("/api/auth/login/", credentials);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    alert("Invalid Username or password");
    throw error;
  }
});

