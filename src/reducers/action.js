const actions = {
  SET_LOGIN_DATA: "SET_LOGIN_DATA",
  SET_CURRENT_USER_DATA: "SET_CURRENT_USER_DATA",
  SET_ID_COUNTER: "SET_ID_COUNTER",
  SET_EVENTS_DATA: "SET_EVENTS_DATA",

  setLoginData: (data) => ({
    type: actions.SET_LOGIN_DATA,
    data,
  }),
  setCurrentUserData: (data) => ({
    type: actions.SET_CURRENT_USER_DATA,
    data,
  }),
  setIdCounterData: (data) => ({
    type: actions.SET_ID_COUNTER,
    data,
  }),
  setEventsData: (data) => ({
    type: actions.SET_EVENTS_DATA,
    data,
  }),
};

export default actions;
