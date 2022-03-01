import { Link } from "react-router-dom";
import s from "./styles.module.scss";

const DialogsUi = ({ friends, messages }) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.dialogs_names}>
                    {friends.map((friend) => (
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
                    {messages.Artem.map((msg) => (
                        <div key={msg.id}>{msg.message}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DialogsUi;
