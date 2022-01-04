import { UsersActionTypes, IUsersState, TUsersAction } from "../../types/users";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: TUsersAction
): IUsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UsersActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
