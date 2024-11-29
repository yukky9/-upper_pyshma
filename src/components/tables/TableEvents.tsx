import React from 'react';
import AddEvents from "../buttons/AddEvents/AddEvents";

const TableEvents = () => {
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
                        <AddEvents/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Экскурсия
                    </th>
                    <td className="px-6 py-4">
                        10.11.2024
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Экскурсия
                    </th>
                    <td className="px-6 py-4">
                        13.09.2023
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Экскурсия
                    </th>
                    <td className="px-6 py-4">
                        11.10.2020
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Экскурсия
                    </th>
                    <td className="px-6 py-4">
                        19.05.2021
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Мастер класс
                    </th>
                    <td className="px-6 py-4">
                        01.03.2024
                    </td>
                </tr>

                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Экскурсия
                    </th>
                    <td className="px-6 py-4">
                        09.08.2024
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Мастер классы
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableEvents;