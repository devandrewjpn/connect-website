import ReactPlayer from 'react-player'
import React, { useState, useEffect } from 'react';
import { Volume1, Volume2, Play, PauseCircle, HardDriveDownload } from 'lucide-react'

export const GalleryItemVideo = ({ enablePlayers, video }) => {

    const [mounted, setMounted] = useState(false)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
        <div className="gallery_item_box" onMouseLeave={() => setPlay(false)}>
            <ReactPlayer width="100%" height="100%" playing={enablePlayers === true ? play : true} volume={enablePlayers ? 1 : 0} style={{ borderRadius: 10 }} url={video} />
            <div className="video_item_media_buttons">
                {play ? <button onClick={() => setPlay(false)}><PauseCircle style={{ color: '#e60404' }} size={26} /></button> : <button onClick={() => setPlay(true)}><Play style={{ color: '#04E63D' }} size={26} /></button>}
                <a href={video} download><HardDriveDownload /></a>
            </div>
        </div>
    )
}