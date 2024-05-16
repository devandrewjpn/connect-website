/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { PauseCircle, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export function FeedBackVideo({ src }) {
    const [mounted, setMounted] = useState(false);
    const [play, setPlay] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        setMounted(true);

        // Definir o tempo inicial do vídeo aqui
        if (playerRef.current) {
            playerRef.current.seekTo(30); // Define o tempo inicial para 30 segundos
        }
    }, []);

    if (!mounted) return null;

    return (
        <div className="testimonials_video">
            <img src="/gallery/mockup.png" />
            <ReactPlayer
                ref={playerRef}
                width="100%"
                height="92%"
                playing={play}
                volume={0.6}
                url={src}
            />
            <div className="media_buttons">
                {play ? (
                    <button onClick={() => setPlay(false)}>
                        <PauseCircle style={{ color: '#e60404' }} size={26} />
                    </button>
                ) : (
                    <button onClick={() => setPlay(true)}>
                        <Play style={{ color: '#04E63D' }} size={26} />
                    </button>
                )}
            </div>
        </div>
    );
}
