import s from "./styles.module.scss";

const TitleUi = ({ title_text }) => {
  return <div className={s.text}>{title_text}</div>;
};

export default TitleUi;
