import React from 'react'
import ReactAudioPlayer from "react-h5-audio-player";
function Player ({audios}) {
  return audios.map((a, i) => (
      <ReactAudioPlayer key={i} src={a.src} />
    )
  )
}

export default Player