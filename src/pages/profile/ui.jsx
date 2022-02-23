import { avatar_src, FriendsIcon } from "../../assets";
import {
    Avatar,
    Button,
    Information,
    Interaction,
    Post,
    Posts,
} from "../../components";
import s from "./styles.module.scss";

const ProfilePageUi = ({ postsData, buttons }) => {
    return (
        <div className={s.Container}>
            <Avatar className={s.Avatar} img={avatar_src} />
            <Information className={s.Info} title_text="Vladimirsky Artem" />
            <Interaction className={s.Interaction} />
            <div className={s.Posts}>
                <Posts />
                <Button text="send" />
                {postsData.map((post) => (
                    <Post key={post.id} text={post.message} />
                ))}
            </div>
        </div>
    );
};

export default ProfilePageUi;
