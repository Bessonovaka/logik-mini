import { IUserState, TUserAction, UserActionTypes } from "../../types/user";

const initialState = {
  isAuth: false,
  email: "",
  password: "",
  isLoading: false,
  registrateFailed: false,
  score: 0,
};

export const userReducer = (
  state: IUserState = initialState,
  action: TUserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_SCORES:
      return { ...state, score: action.score };
    case UserActionTypes.SET_AUTH:
      return { ...state, isAuth: action.isAuth };
    case UserActionTypes.SET_USER:
      return {
        ...state,
        email: action.user.email,
        password: action.user.password,
      };
    case UserActionTypes.LOGIN:
      return { ...state, email: action.email, password: action.password };
    case UserActionTypes.LOGIN_ERROR:
      return { ...state, isAuth: false };
    case UserActionTypes.LOGIN_SUCCESS:
      return { ...state, isAuth: true };
    case UserActionTypes.REGISTRATION:
      return { ...state, email: action.email, password: action.password };
    case UserActionTypes.REGISTRATION_FAILED:
      return { ...state, registrateFailed: true };
    case UserActionTypes.REGISTRATION_SUCCESS:
      return { ...state, registrateFailed: false };
    case UserActionTypes.CHECK_AUTH:
      return { ...state, isAuth: action.isAuth, isLoading: action.isLoading };
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        email: action.email,
        password: action.password,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
