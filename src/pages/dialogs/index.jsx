import { connect } from "react-redux";
import {
    sendMessageCreator,
    updateNewMessageCreator,
} from "../../redux/reducers/dialogsReducer";
import DialogsUi from "./ui";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        changeMessageText: (text) => {
            dispatch(updateNewMessageCreator(text));
        },
    };
};

const Dialogs = connect(mapStateToProps, mapDispatchToProps)(DialogsUi);

export default Dialogs;
