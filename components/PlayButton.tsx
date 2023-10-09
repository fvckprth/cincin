import React from 'react';

interface PlayButtonProps {
  handlePlayPause: React.MouseEventHandler<HTMLDivElement>;
}

const PlayButton: React.FC<PlayButtonProps> = ({ handlePlayPause }) => {
    return (
        <div className="absolute top-0 left-0 z-10 pt-2 pl-4 cursor-pointer" onClick={handlePlayPause}>
            <img
                src='/play.png'
                alt='Play'
                style={{ height: '72px' }}
            />
        </div>
    );
}

export default PlayButton;