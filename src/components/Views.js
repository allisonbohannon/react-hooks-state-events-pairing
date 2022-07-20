import React from "react";

function Views({ videoData }) {
    console.log(videoData)
    return (
        <p>{videoData.views} Views | {videoData.createdAt}</p>
    )
}

export default Views; 