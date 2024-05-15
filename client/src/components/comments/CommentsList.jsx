import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios'
const CommentList = ({postId}) => {
    const [comments, setComments] = useState(null);
    const getAlldata = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/api/posts/${postId}/comments`);
            setComments(res.data)
        } catch (err) {
            console.log(err)
        }
    }
   useEffect(() => {
    getAlldata()
   },[])
    return ( <>
        {comments && comments.map(comment => {
            return <div key={comment._id}>
                {comment.content}
            </div>
        })}
    </> );
}
CommentList.propTypes = {
    postId: PropTypes.string.isRequired
}
 
export default CommentList;