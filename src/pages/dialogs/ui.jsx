import s from "./styles.module.scss";

const DialogsUi = ({friends, currentMsgs, onFriendsClick}) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogs_names}>
                    {friends.map((friend) => <div onClick={() => onFriendsClick(friend.name)} className={s.dialogs_item}>{friend.name}</div>)}
                </div>
                <div className={s.messages}>
                    {currentMsgs.map((msg) => <div className={s.message}>{msg.message}</div>)}
                </div>
            </div>
        </div>
    );
};

export default DialogsUi;
