import actions from "./action";

const initialState = {
  registerData: [],
  currentUser: {},
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER_DATA:
      return {
        currentUser: action.data,
      };

    default:
      return state;
  }
};

export default currentUser;
