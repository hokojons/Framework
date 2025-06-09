import { useState } from 'react'

export default function Lyrics() {
  const [song, setSong] = useState({
    title: 'Sample Song',
    artist: 'Unknown Artist',
    lyrics: 'These are the song lyrics...'
  })

  return (
    <div className="lyrics-container">
      <h2>{song.title}</h2>
      <h3>by {song.artist}</h3>
      <div className="lyrics">
        <p>{song.lyrics}</p>
      </div>
    </div>
  )
}