import PostInput from "../postInput";
import Button from "../button";

const PostsUi = ({ className }) => {
    return (
        <div className={className}>
            <PostInput />
            <Button text="send"/>
        </div>
    );
};

export default PostsUi;
