import { useCallback, useMemo, useState } from "react";
import DialogsUi from "./ui";

const Dialogs = (props) => {
    const { dialogs, match } = props;
    const {id} = match.params;
    console.log(id);
    return (
        <DialogsUi
            friends={dialogs.friends}
            messages={dialogs.messages}
        />
    );
};

export default Dialogs;
