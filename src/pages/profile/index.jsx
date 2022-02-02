import { useCallback, useMemo, useState } from "react";
import ProfilePageUi from "./ui";

const ProfilePage = (props) => {
  const [isActive, setIsActive] = useState(true);
  const onClickHandler = useCallback((e) => {
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 2000);
  }, []);

  const buttons = useMemo(() => [
    {
      id: 1,
      text: isActive ? "Active" : "Disabled",
      onClick: onClickHandler,
      theme: "yellow",
      disabled: !isActive
    },
    {
        id: 2,
        text: isActive ? "Active" : "Disabled",
        onClick: onClickHandler,
        theme: "orange",
        disabled: !isActive
      },
      {
        id: 3,
        text: isActive ? "Active" : "Disabled",
        onClick: onClickHandler,
        theme: "yellow",
        disabled: !isActive
      },
  ],
  [isActive, onClickHandler]);

  return <ProfilePageUi buttons={buttons} />;
};

export default ProfilePage;
