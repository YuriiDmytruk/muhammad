import React from 'react';

interface OrangeButtonProps {
    text: string;
    onClick: () => void;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className='bg-orange text-white rounded-md px-2 py-1 text-md font-light'
        >
            {text}
        </button>
    );
};

export default OrangeButton;