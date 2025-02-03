import React from "react";

const VideoPanel = () => {
  return (
    <div className="w-full h-[500px] bg-black rounded-lg shadow-lg">
      <video
        className="w-full h-full rounded-lg max-w-full"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
};

export default VideoPanel;