import { useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios'
const CommentCreate = ({postId}) => {
    const [comment, setComment] = useState('');
    const createComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/api/posts/${postId}/comments`,{content :comment});
            console.log(comment)    
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
   
    return ( <>
        <form onSubmit={createComment}>
            <div>
                <label htmlFor="content">content</label>
                <input type="text" name="content"
                     onChange={(e)=>setComment(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>create</button>
            </div>
        </form>
    </> );
}
CommentCreate.propTypes = {
    postId: PropTypes.string.isRequired
}
 
export default CommentCreate;