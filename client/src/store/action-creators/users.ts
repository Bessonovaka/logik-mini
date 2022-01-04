import axios from "axios";
import { Dispatch } from "react";
import { TUsersAction, UsersActionTypes } from "../../types/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<TUsersAction>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
