const actionType = {
    ADD_POST: "ADD-POST",
    UPDATE_NEW_POST_TEXT: "UPDATE-NEW-POST-TEXT",
};

const initialState = {
    postsData: [
        { id: 1, message: "Hi, I am React master!", likesCount: 12 },
        { id: 2, message: "No, I", likesCount: 100000 },
        { id: 3, message: "Hahaha", likesCount: 3 },
        { id: 4, message: "Blablabla", likesCount: 1 },
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [ ...state.postsData, newPost ],
                newPostText: "",
            }
        }
        case actionType.UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText }
        }
        default: {
            return state;
        }
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: actionType.ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: actionType.UPDATE_NEW_POST_TEXT,
    newText: text,
});
