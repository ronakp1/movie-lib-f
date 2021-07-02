import React, { useState } from 'react'
//  import { submitComment } from './services/CommentService';
import { submitComment } from './services/CommentService';
import SingleComment from './SingleComment';
import styles from '../styles/SingleComment.module.css';
import ReplyComment from './ReplyComment';

const Comments = (props) => {
    const [comment, setComment] = useState('');
    const handleChange = (e) => {
        setComment(e.target.value);
        // console.log(comment);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("movieid", props.movie)
        // console.log("entered", comment);
        const data = {
            message: comment,
            commentor: null,
            movieId: props.movie
        }
        // submitComment(data);
        const res = await submitComment(data);
        setComment('');
        console.log("received", res.result);
        props.refreshFunction(res.result);
        // console.log("2020", res.result);

    }
    return (
        <div>
            <br />
            <p className={styles.replyHeader}> Comments</p>
            <hr />
            {/* Comment Lists  */}
            {console.log("comments",props.comments)}

            {props.comments && props.comments.map((comment, index) => (
                (!comment.respondingTo &&
                    <React.Fragment>
                        <SingleComment comment={comment} movieId={props.movie} refreshFunction={props.refreshFunction} />
                        {/* <ReplyComment comments={props.comments} movieId={props.movieId} parentCommentId = {comment._id} refreshFunction={props.refreshFunction}/> */}
                    </React.Fragment>
                )
            ))}
            <form onSubmit={handleSubmit} >
                <textarea onChange={handleChange} value={comment} placeholder='Write a comment'></textarea>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comments
