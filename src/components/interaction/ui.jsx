import Button from "../button";

const InteractionUi = ({ className, buttons }) => {
    return (
        <div className={className}>
            <Button text="like" theme="yellow" />
            <Button text="repost" theme="orange" />
        </div>
    );
};

export default InteractionUi;
