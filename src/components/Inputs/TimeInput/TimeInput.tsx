import React from 'react';

const TimeInput = () => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            <input datepicker-format="dd.mm.yyyy" id="card-expiration-input" type="text"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder="01.12.2023" required/>
            <input datepicker-format="hh:mm" id="card-expiration-input" type="text"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder="12:35" required/>
        </div>
    );
};

export default TimeInput;