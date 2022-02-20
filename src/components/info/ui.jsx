import s from "./styles.module.scss";

const InfoUi = ({feature, content}) => {
    return <div className={s.info}>
        <p className={s.info_feature}>{feature}:</p>
        <p className={s.info_content}>{content}</p>
    </div>
}

export default InfoUi;