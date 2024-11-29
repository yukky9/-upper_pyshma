import React from 'react';
import AddNews from "../buttons/AddNews/AddNews";

const Table = () => {
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
                        <AddNews/>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Хакатон
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Новое направление
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Хакатон
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Хакатон
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Войти в IT
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
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
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Войти в IT в Нижнем Новгороде
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>

                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Новое направление разработки
                    </th>
                    <td className="px-6 py-4">
                        11.12.2020
                    </td>
                </tr>
                <tr className="bg-white">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Хакатон
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

export default Table;