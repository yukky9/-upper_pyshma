import React from 'react';

const AddSociety = () => {
    return (
        <div>
            <button onClick={() => window.location.href = '/createnewsociety'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                </svg>
            </button>
        </div>
    );
};

export default AddSociety;