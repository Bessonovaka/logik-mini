export interface IUserState {
  isAuth: boolean;
  email: null | string;
  password: null | string;
  isLoading: boolean;
  registrateFailed: boolean;
  score: number;
}

export enum UserActionTypes {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  REGISTRATION = "REGISTRATION",
  LOGOUT = "LOGOUT",
  CHECK_AUTH = "CHECK_AUTH",
  REGISTRATION_FAILED = "REGISTRATION_FAILED",
  LOGIN_ERROR = "LOGIN_ERROR",
  SET_SCORES = "SET_SCORES",
}

interface ISetAuthAction {
  type: UserActionTypes.SET_AUTH;
  isAuth: boolean;
}

interface ISetUserAction {
  type: UserActionTypes.SET_USER;
  user: IUserState;
}

interface ILoginAction {
  type: UserActionTypes.LOGIN;
  email: string;
  password: string;
}

interface ILoginActionSuccess {
  type: UserActionTypes.LOGIN_SUCCESS;
  isAuth: boolean;
}

interface ILoginActionError {
  type: UserActionTypes.LOGIN_ERROR;
  isAuth: boolean;
}

interface IRegistrationAction {
  type: UserActionTypes.REGISTRATION;
  email: string;
  password: string;
}

interface IRegistrationActionSuccess {
  type: UserActionTypes.REGISTRATION_SUCCESS;
  registrateFailed: boolean;
}

interface IRegistrationActionFailed {
  type: UserActionTypes.REGISTRATION_FAILED;
  registrateFailed: boolean;
}

interface ILogout {
  type: UserActionTypes.LOGOUT;
  isAuth: boolean;
  email: string;
  password: string;
}

interface ICheckAuthAction {
  type: UserActionTypes.CHECK_AUTH;
  isAuth: boolean;
  isLoading: boolean;
}

interface ISetScoresAction {
  type: UserActionTypes.SET_SCORES;
  score: number;
}

export type TUserAction =
  | ISetAuthAction
  | ISetUserAction
  | ILoginAction
  | ILoginActionSuccess
  | IRegistrationAction
  | IRegistrationActionSuccess
  | ILogout
  | ICheckAuthAction
  | IRegistrationActionFailed
  | ILoginActionError
  | ISetScoresAction;
