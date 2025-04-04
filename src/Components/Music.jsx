import React, { useRef, useState } from "react";

const Music = () => {
  const [music, setMusic] = useState(false);
  const audioRef = useRef(null);

  const handleMusic = () => {
    setMusic(!music);
    if (!music) {
      audioRef.current?.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <div className="z-3">
      <label className="swap">
        <input type="checkbox" onClick={handleMusic} />

        <svg
          className="swap-on fill-current "
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
        </svg>

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
        </svg>
      </label>
      <audio ref={audioRef} autoPlay className="app__audio">
        <source
          src="/Music/study-music-dawn-break-211851.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};

export default Music;
