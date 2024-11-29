import React from 'react';
import AddSociety from "../buttons/AddSociety/AddSociety";

const TableSociety = () => {
    return (
        <div className="relative overflow-x-auto mt-40 -ml-96">
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
                        <AddSociety/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Python
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Python
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Python
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Python
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>

                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Python
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Python
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableSociety;