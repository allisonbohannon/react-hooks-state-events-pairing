import React, { useState } from "react";
import Comment from "./Comment"

function CommentList({ videoData }) {
    const [toggle, setToggle] = useState(true)

    function handleClick() {
        setToggle((toggle) => !toggle)
        console.log(!toggle)
    }

    const commentList = videoData.comments.map(comment => {
        return (
            <Comment key={comment.key} user={comment.user} comment={comment.comment}/> 
        )
    })

    return (
        <div>
            <button onClick={handleClick}>{toggle? 'Hide Comments' : "Show Comments"}</button>
            {toggle? <h1>{videoData.comments.length} Comments</h1>: ''}
            {toggle? commentList : ''}
        </div>
    )
}

export default CommentList; 