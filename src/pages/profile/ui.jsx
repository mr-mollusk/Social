import { FriendsIcon } from "../../assets";
import { Button } from "../../components";

const ProfilePageUi = ({ buttons }) => {
  return (
    <div>
      <h1>ProfilePage</h1>
      <FriendsIcon />
      {buttons.map((btn) => <Button key={btn.id} {...btn}/>)}
    </div>
  );
};

export default ProfilePageUi;
