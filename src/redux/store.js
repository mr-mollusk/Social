import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReduces";

const actionType = {
    ADD_POST: "ADD-POST",
    UPDATE_NEW_POST_TEXT: "UPDATE-NEW-POST-TEXT",
    UPDATE_NEW_MESSAGE_TEXT: "UPDATE-NEW-MESSAGE-TEXT",
    SEND_MESSAGE: "SEND-MESSAGE",
};

const store = {
    _state: {
        profile: {
            postsData: [
                { id: 1, message: "Hi, I am React master!", likesCount: 12 },
                { id: 2, message: "No, I", likesCount: 100000 },
                { id: 3, message: "Hahaha", likesCount: 3 },
                { id: 4, message: "Blablabla", likesCount: 1 },
            ],
            newPostText: "",
        },
        dialogs: {
            friends: [
                { name: "Artem", id: 1 },
                { name: "Dasha", id: 2 },
                { name: "Sasha", id: 3 },
            ],
            messages: {
                Artem: [
                    { id: 1, message: "abc", me: true },
                    { id: 2, message: "text", me: true },
                    { id: 3, message: "lorem ipsum", me: true },
                ],
                Dasha: [{ message: "pararam", me: true }],
                Sasha: [{ message: "hi", me: false }],
            },
            newMessageText: "",
        },
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    },
};




export default store;
window.store = store;
