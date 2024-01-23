const actions = {
  SET_LOGIN_DATA: "SET_LOGIN_DATA",
  SET_CURRENT_USER_DATA: "SET_CURRENT_USER_DATA",

  setLoginData: (data) => ({
    type: actions.SET_LOGIN_DATA,
    data,
  }),
  setCurrentUserData: (data) => ({
    type: actions.SET_CURRENT_USER_DATA,
    data,
  }),
};

export default actions;
