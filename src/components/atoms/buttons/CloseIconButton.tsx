import React from 'react';

interface CloseIconButtonProps {
    onClick: () => void;
}

const CloseIconButton: React.FC<CloseIconButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
            &times;
        </button>
    );
};

export default CloseIconButton;