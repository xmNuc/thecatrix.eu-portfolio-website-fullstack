import React, { useState } from 'react';
import ReactPlayer from 'react-player';
export const YtVideo = () => {
  const [startVideo, setStartVideo] = useState(false);

  const handleStartVideo = (e) => {
    setStartVideo(true);
  };

  return (
    <>
      {!startVideo && (
        <div
          className="play-btn"
          onClick={(e) => {
            handleStartVideo();
          }}
        ></div>
      )}
      {startVideo && (
        <ReactPlayer
          url="https://www.youtube-nocookie.com/embed/VSeTrK3fA8c"
          playing={true}
          controls={true}
          width="600px"
          height="340px"
        />
      )}
    </>
  );
};
