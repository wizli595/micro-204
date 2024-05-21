import PropTypes from 'prop-types';
const CommentList = ({ post }) => {
    console.log(post);
    return (<>
        {post.comments.map(comment => {
            return <div key={comment._id}>
                {comment.content}
            </div>;
        })}
    </>);
};
CommentList.propTypes = {
    post: PropTypes.object
};

export default CommentList;