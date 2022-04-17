import { Link } from "react-router-dom";
import { Button } from "../../components";
import s from "./styles.module.scss";

const DialogsUi = ({ dialogs, onSendMessageClick, changeMessageText }) => {

    
    const onChangeMessageText = (e) => {
        const text = e.target.value;
        changeMessageText(text);
    }

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogs_names}>
                    {dialogs.friends.map((friend) => (
                        <Link
                            key={friend.id}
                            className={s.nav_link}
                            to={`/messages/${friend.id}`}
                        >
                            {friend.name}
                        </Link>
                    ))}
                </div>
                <div className={s.messages}>
                    {dialogs.messages.Artem.map((msg) => (
                        <div key={msg.id}>{msg.message}</div>
                    ))}
                    <div className={s.send_area}>
                        <textarea onChange={onChangeMessageText} value={dialogs.newMessageText} ></textarea>
                        <Button text="Send" onClick={onSendMessageClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogsUi;
