import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import register from "./reducers/reducer";
import currentUser from "./reducers/currentUser";
import { combineReducers, createStore } from "redux";

const combinedReducer = combineReducers({
  register,
  currentUser,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["register"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
