import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReduces";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
});

const store = createStore(reducers);

export default store;
