import CommentCreate from "../comments/CommentCreate";
import CommentList from "../comments/CommentsList";
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
    return (<>
        <div style={{ border: "1px solid" }}>
            <h2>{post.title}</h2>
            <CommentList postId={post._id} />
            <CommentCreate postId={post._id} />

        </div>
    </>);
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard;   