import { connect } from "react-redux";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../redux/reducers/profileReduces";
import PostInputUI from "./ui";

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    };
};

const PostInput = connect(mapStateToProps, mapDispatchToProps)(PostInputUI);

export default PostInput;
