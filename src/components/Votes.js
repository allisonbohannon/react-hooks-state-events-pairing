import React, { useState } from "react";

function Votes({ videoData }) {
    console.log(videoData)
    const [upVotes, setUpVotes] = useState(videoData.upvotes)
    const [downVotes, setDownVotes] = useState(videoData.downvotes)

    function handleUpvote() {
        setUpVotes((upVotes) => upVotes += 1)
    }; 

    function handleDownvote() {
        setDownVotes((downVotes) => downVotes += 1)
    }; 

    return (
        <div>
            <button onClick={handleUpvote}>{upVotes} 👍</button>
            <button onClick={handleDownvote}>{downVotes} 👎</button>
        </div>
    )
}

export default Votes; 