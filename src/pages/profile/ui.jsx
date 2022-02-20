import { avatar_src, FriendsIcon } from "../../assets";
import {
  Avatar,
  Button,
  Information,
  Interaction,
  Posts,
} from "../../components";
import s from "./styles.module.scss";

const ProfilePageUi = ({ buttons }) => {
  return (
    <div className={s.Container}>
      <Avatar className={s.Avatar} img={avatar_src}/>
      <Information className={s.Info} title_text="Vladimirsky Artem" />
      <Interaction className={s.Interaction}/>
      <Posts className={s.Posts} />
    </div>
  );
};

export default ProfilePageUi;
