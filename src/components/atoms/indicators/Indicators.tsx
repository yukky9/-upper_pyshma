import React from 'react';

interface StatusIndicatorProps {
    isSafe: boolean; // true - безопасно, false - небезопасно
}

const Indicators = ({ isSafe }:StatusIndicatorProps) => {
    return (
        <div className={`p-2 h-2 w-2 rounded-full ${isSafe ? 'bg-green-500' : 'bg-red-500'}`}>
            {isSafe}
        </div>
    );
};

export default Indicators;