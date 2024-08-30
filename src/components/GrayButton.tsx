import React from 'react';

interface GrayButtonProps {
    text: string;
    onClick: () => void;
}

const GrayButton: React.FC<GrayButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className='bg-gray text-black rounded-md px-2 py-1 text-md font-light'
        >
            {text}
        </button>
    );
};

export default GrayButton