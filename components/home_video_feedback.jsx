import { useState } from "react"
import { FeedBackVideo } from "./feedback_video"

export function HomeVideoFeedback() {

    const videos = [
        {
            id: 1,
            src: "/gallery/alex.mp4"
        },
        {
            id: 2,
            src: "/gallery/jose.mp4"
        },
        {
            id: 3,
            src: "/gallery/mathias.mp4"
        },
        {
            id: 4,
            src: "/gallery/walmir.mp4"
        },
    ]

    return (
        <div className="container my-5 py-5">
            <div className="row testimonials_video_row">
                {videos.map(video => (
                    <div key={video.id} className="col-md-3">
                        <FeedBackVideo src={video.src} />
                    </div>
                ))}
            </div>
        </div>
    )
}