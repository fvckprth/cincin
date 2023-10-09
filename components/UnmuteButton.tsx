import React from 'react';

interface UnmuteButtonProps {
  handleMuteUnmute: React.MouseEventHandler<HTMLDivElement>;
}

const UnmuteButton: React.FC<UnmuteButtonProps> = ({ handleMuteUnmute }) => {
    return (
        <div className="z-10 pr-4 cursor-pointer" onClick={handleMuteUnmute}>
            <img
                src='/unmute.png'
                alt='Unmute'
                style={{ backgroundColor: 'blue' }}
            />
        </div>
    );
}

export default UnmuteButton;