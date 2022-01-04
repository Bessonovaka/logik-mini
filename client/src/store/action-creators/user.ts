import { Dispatch } from "react";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import { TUserAction, UserActionTypes } from "../../types/user";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<TUserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.LOGIN,
        email: email,
        password: password,
      });
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch({
        type: UserActionTypes.LOGIN_SUCCESS,
        isAuth: true,
      });
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch({
        type: UserActionTypes.LOGIN_ERROR,
        isAuth: false,
      });
    }
  };
};

export const registration = (email: string, password: string) => {
  return async (dispatch: Dispatch<TUserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.REGISTRATION,
        email: email,
        password: password,
      });
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch({
        type: UserActionTypes.REGISTRATION_SUCCESS,
        registrateFailed: false,
      });
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch({
        type: UserActionTypes.REGISTRATION_FAILED,
        registrateFailed: true,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<TUserAction>) => {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem("token");
      dispatch({
        type: UserActionTypes.LOGOUT,
        isAuth: false,
        email: "",
        password: "",
      });
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch<TUserAction>) => {
    dispatch({
      type: UserActionTypes.CHECK_AUTH,
      isAuth: false,
      isLoading: true,
    });
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      dispatch({
        type: UserActionTypes.CHECK_AUTH,
        isAuth: true,
        isLoading: false,
      });
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch({
        type: UserActionTypes.CHECK_AUTH,
        isAuth: true,
        isLoading: false,
      });
    }
  };
};

export const setScores = (score: number) => {
  return async (dispatch: Dispatch<TUserAction>) => {
    dispatch({
      type: UserActionTypes.SET_SCORES,
      score: score,
    });
  };
};
