"use client"

import React, { useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import PlayButton from './PlayButton';
import UnmuteButton from './UnmuteButton';

export default function BackgroundVideo() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const playerRef = useRef(null);

    const handlePlayPause: React.MouseEventHandler<HTMLDivElement> = () => {
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

    const handleMuteUnmute: React.MouseEventHandler<HTMLDivElement> = () => {
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
                muted={isMuted}
            />
            {!isPlaying && <PlayButton handlePlayPause={handlePlayPause} />}
            {isMuted && <UnmuteButton handleMuteUnmute={handleMuteUnmute} />}
        </div>
    );
}