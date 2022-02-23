import { useCallback, useMemo, useState } from "react";
import DialogsUi from "./ui";

const Dialogs = (props) => {
    const friends = useMemo(
        () => [{ name: "Artem" }, { name: "Dasha" }, { name: "Sasha" }],
        []
    );
    const messages = useMemo(
        () => ({
            Artem: [{ message: "abc", me: true }],
            Dasha: [{ message: "pararam", me: true }],
            Sasha: [{ message: "hi", me: false }],
        }),
        []
    );

    const [currentMsgs, setCurrentMsgs] = useState([]);

    const onFriendClick = useCallback((name) => setCurrentMsgs(messages[name]), [messages]);

    return <DialogsUi friends={friends} currentMsgs={currentMsgs} onFriendsClick={onFriendClick}/>;
};

export default Dialogs;
