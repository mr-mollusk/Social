import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReduces";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
});

const store = createStore(reducers);

export default store;
