import React from "react";
import { Button } from "..";
import s from "./styles.module.scss";

const PostInputUI = ({ profile, updateNewPostText, addPost }) => {
    console.log(profile);
    const onPostChange = (e) => {
        const text = e.target.value;    
        updateNewPostText(text);
    };

    return (
        <div className={s.wrapper}>
            <textarea
                onChange={onPostChange}
                className={s.text_input}
                value={profile.newPostText}
            />
            <Button text="send" onClick={addPost} />
        </div>
    );
};

export default PostInputUI;
