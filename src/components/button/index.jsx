import { useCallback } from "react";
import s from "./styles.module.scss";

const Button = ({text, onClick, theme="yellow", className="", disabled=false, textTransform="uppercase"}) => {
  const onClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={disabled}
      style={{
          textTransform
      }}
      className={`${s.button} ${s[theme]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
