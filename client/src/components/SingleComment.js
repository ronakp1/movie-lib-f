import React, { useState } from 'react'
import styles from '../styles/SingleComment.module.css';
import { submitComment } from './services/CommentService';
const SingleComment = (props) => {
    const [CommentValue, setCommentValue] = useState("")
    const [openReply, setOpenReply] = useState(false);

    console.log("single", props);
    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            commentor: null,
            movieId: props.comment.movieId,
            respondingTo: props.comment._id,
            message: props.comment.message
        }
        const res = await submitComment(data);
        console.log("arrived", res);
        setCommentValue('');
        setOpenReply(!openReply);
        props.refreshFunction(res.result);
    }
    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value);
    }

    const openReplyHandler = () => {
        setOpenReply(!openReply);
    }



    return (
        <div>
            {console.log("singlecomment", props)}
            
                <p className={styles.commentor}>{props.comment.commentor.username}</p>
            
            <p className={styles.message}>{props.comment.message}</p>
            <span className={styles.message} onClick={openReplyHandler}>Reply to</span>


            {openReply &&
                <form onSubmit={onSubmit}>
                    <textarea onChange={handleChange} value={CommentValue} placeholder="Write reply" />
                    <br />
                    <button onClick={onSubmit}>Submit Reply</button>
                </form>
            }
        </div >
    )
}

export default SingleComment
