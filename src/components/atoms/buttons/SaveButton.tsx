import React from 'react';


const SaveButton = () => {
    const handleClick = () => {
        window.location.href = "/";
    };

    return (
        <button type="button" onClick={handleClick}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2">
            Скачать
        </button>
    );
};

export default SaveButton;