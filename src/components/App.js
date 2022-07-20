import React from "react"
import video from "../data/video.js";
import VideoHeader from "./VideoHeader"
import Views from "./Views"
import Votes from "./Votes"
import CommentList from "./CommentList"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoHeader videoData={video}/>
      <Views videoData={video}/>
      <Votes videoData={video}/> 
      <br></br>
      <CommentList videoData={video}/> 
    </div>
  );
}

export default App;
