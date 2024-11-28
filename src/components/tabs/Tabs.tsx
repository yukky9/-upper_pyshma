import React from 'react';

const Tabs = () => {
    return (
        <div className="md:flex mt-48 ml-36">
            <ul className="flex-column space-y space-y-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <div className='fixed'>
                <div>
                    <a href="/news"
                       className="inline-flex items-center px-4 py-3 text-black bg-black rounded-lg active w-full dark:bg-white"
                       aria-current="page">
                        Новости
                    </a>
                </div>
                <div>
                    <a href="/events"
                       className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black">
                        Мероприятия
                    </a>
                </div>
                <div>
                    <a href="/society"
                       className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black">
                        Кружки
                    </a>
                </div>
                </div>
            </ul>
        </div>
    );
};

export default Tabs;