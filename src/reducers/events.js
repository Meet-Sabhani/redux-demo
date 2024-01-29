import actions from "./action";

const initialState = {
  eventsData: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_EVENTS_DATA:
      return {
        ...state,
        eventsData: action.data,
      };
    default:
      return state;
  }
};

export default events;
