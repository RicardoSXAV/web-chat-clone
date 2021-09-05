import { users } from "../../data/Users";

type User = {
  name: string;
  profileImage: string;
};

type Action = {
  type: string;
  payload?: User;
};

const initialState = users[0];

export default function userReducer(
  state: User = initialState,
  action: Action
) {
  switch (action.type) {
    case "CHANGE_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
}
