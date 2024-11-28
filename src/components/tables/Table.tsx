import React from 'react';

const Table = () => {
    return (
        <div className="relative overflow-x-auto mt-48 -ml-64">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-white dark:text-gray-950">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Название
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Дата
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        1
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                        1
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        1
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;