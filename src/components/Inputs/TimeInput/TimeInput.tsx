import React from 'react';

const TimeInput = () => {
    return (
        <div className="col-span-2">
            <label htmlFor="card-expiration-input" className="sr-only">Date/time:</label>
            <input datepicker-format="mm/yy hh:mm" id="card-expiration-input" type="text"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="12/23 12:35" required/>
        </div>
    );
};

export default TimeInput;