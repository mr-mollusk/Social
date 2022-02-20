import s from "./styles.module.scss";

const AvatarUi = ({className, img}) => {
    return (
        <div className={className} >
            <img className={s.avatar_img} src={img} alt="Image didn't loaded" />
        </div>
    )
}

export default AvatarUi;