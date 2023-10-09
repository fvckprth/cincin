"use client"

import React, { useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';

export default function BackgroundVideo() {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const playerRef = useRef(null);

    const handlePlayPauseMuteUnmute = () => {
        const current = playerRef.current;
        if (current) {
            if (isPlaying) {
                (current as any).pause();
                (current as any).muted = true;
                setIsMuted(true);
            } else {
                (current as any).play();
                (current as any).muted = false;
                setIsMuted(false);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='overflow-hidden'>
            <MuxPlayer
                ref={playerRef}
                playbackId="YDkyajWe6c3MZkXl56mpgKLod98Y00ZUtIGTuWMLo00w4"
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
                muted={isMuted}
            />
            <button 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1
                }}
                onClick={handlePlayPauseMuteUnmute}
            >
                {isPlaying ? ' ' : '  '}
            </button>
        </div>
    );
}