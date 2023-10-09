"use client"

import React, { useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';

export default function BackgroundVideo() {
    const [isMuted, setIsMuted] = useState(true);
    const playerRef = useRef(null);

    const handleMuteUnmute: React.MouseEventHandler<HTMLDivElement> = () => {
        const current = playerRef.current;
        if (current) {
            (current as any).volume = isMuted ? 1 : 0;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div>
            <MuxPlayer
                ref={playerRef}
                playbackId="aHuPzAYEtHo3QyPa01G9YcIttmSRUUvF6007rh00Op5oZM"
                metadata={{
                    video_title: "Italy MotoGP VHS Footage",
                }}
                autoPlay="any"
                loop
                streamType="on-demand"
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1
                }}
                volume={isMuted ? 0 : 1}
            />
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    backgroundColor: 'transparent'
                }}
                onClick={handleMuteUnmute}
            />
        </div>
    );
}