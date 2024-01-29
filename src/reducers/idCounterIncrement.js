import actions from "./action";

const initialState = {
  idCounterData: 1,
};

const idCounterIncrement = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ID_COUNTER:
      return {
        ...state,
        idCounterData: state.idCounterData + 1,
      };
    default:
      return state;
  }
};

export default idCounterIncrement;
