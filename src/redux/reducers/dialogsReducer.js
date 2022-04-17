const actionType = {
    UPDATE_NEW_MESSAGE_TEXT: "UPDATE-NEW-MESSAGE-TEXT",
    SEND_MESSAGE: "SEND-MESSAGE",
};

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    const stateCopy = {
        ...state,
        messages: { ...state.messages, Artem: [...state.messages.Artem] },
    };
    switch (action.type) {
        case actionType.UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        case actionType.SEND_MESSAGE: {
            
            const newMessage = state.newMessageText;
            stateCopy.messages.Artem.push({ id: 4, message: newMessage });
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        default: {
            return state;
        }
    }
};

export const sendMessageCreator = () => ({ type: actionType.SEND_MESSAGE });
export const updateNewMessageCreator = (text) => ({
    type: actionType.UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
});

export default dialogsReducer;
