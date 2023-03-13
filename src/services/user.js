import api from "./apiConfig";
import jwtDecode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    const decoded = jwtDecode(localStorage.getItem("token"));
    const id = decoded.user_id;
    const { data } = await api.get(`/api/user/${id}`);
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
});

export const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await api.post(`/api/auth/register/`, credentials);
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

