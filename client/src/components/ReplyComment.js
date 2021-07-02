import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment'
function ReplyComment(props) {
    const [childCommentNumber, setChildCommentNumber] = useState(0);
    const [openReplyComments, setOpenReplyComments] = useState(false);
    useEffect(() => {
        let commentNumber = 0;
        props.comments.map((comment) => {
            if (comment.repondingTo === props.parentCommentId) {
                commentNumber++;
            }
        })
        setChildCommentNumber(commentNumber);
    }, [])

    let renderReplyComment = (parentCommentId) => {
        {
            props.comments && props.comments.map((comment, index) => (
                <React.Fragment>
                    {comment.respondingTo === parentCommentId}
                    <React.Fragment>
                        <SingleComment comment={comment} movieId={props.movie} refreshFunction={props.refreshFunction} />
                        <ReplyComment comments={props.comments} movieId={props.movieId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                    </React.Fragment>
                </React.Fragment>
            ))
        }
    }

    const handleChange = () => {
        setOpenReplyComments(!openReplyComments);
    }
    return (
        <div>
            {childCommentNumber > 0 &&
                <p onClick={handleChange}>View {childCommentNumber} more comments</p>
            }
            {/* {renderReplyComment(props.parentCommentId)} */}


            {openReplyComments &&
                renderReplyComment(props.parentCommentId)
            }
        </div>
    )
}

export default ReplyComment
