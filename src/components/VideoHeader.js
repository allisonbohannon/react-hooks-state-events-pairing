import React from "react";

function VideoHeader({ videoData }) {
    return (
        <div>
             <iframe
            width="919"
            height="525"
            src={videoData.embedUrl}
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{videoData.title}</h1>
        </div>
       
    )
}

export default VideoHeader; 