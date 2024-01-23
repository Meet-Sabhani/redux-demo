import actions from "./action";

const initialState = {
  registerData: [],
  currentUser: {},
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOGIN_DATA:
      return {
        ...state,
        registerData: action.data,
      };

    default:
      return state;
  }
};

export default register;
