"use client"

import React, { useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';

export default function BackgroundVideo() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const playerRef = useRef(null);

    const handlePlayPause = () => {
        const current = playerRef.current;
        if (current) {
            if (isPlaying) {
                (current as any).pause();
            } else {
                (current as any).play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMuteUnmute = () => {
        const current = playerRef.current;
        if (current) {
            (current as any).muted = !(current as any).muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div>
            <MuxPlayer
                ref={playerRef}
                playbackId="9R01PrPvZCG6N2ezOA5FNXzca7G7u5tQLtP021ZToOqBU"
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
            <div className="absolute top-0 left-0 z-10 pt-2 pl-4 cursor-pointer" onClick={handlePlayPause}>
                <img
                    src={isPlaying ? '/pause.png' : '/play.png'}
                    alt={isPlaying ? 'Pause' : 'Play'}
                    style={{ height: '72px' }}
                />
            </div>
            <div className="absolute top-0 right-0 z-10 pr-4 cursor-pointer" onClick={handleMuteUnmute}>
                <img
                    src={isMuted ? '/unmute.png' : '/mute.png'}
                    alt={isMuted ? 'Unmute' : 'Mute'}
                    style={{ height: '64px'}}
                />
            </div>
        </div>
    );
}