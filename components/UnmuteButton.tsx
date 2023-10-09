import React from 'react';

interface UnmuteButtonProps {
  handleMuteUnmute: React.MouseEventHandler<HTMLDivElement>;
}

const UnmuteButton: React.FC<UnmuteButtonProps> = ({ handleMuteUnmute }) => {
    return (
        <div onClick={handleMuteUnmute}>
            <img
                src='/unmute.png'
                alt='Unmute'
            />
        </div>
    );
}

export default UnmuteButton;