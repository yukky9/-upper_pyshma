import React from 'react';
import Line from "../add_img/Line";

const Tabs = () => {
    return (
        <div className="md:flex mt-40 ml-36">
            <ul className="flex-column space-y space-y-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <div className='fixed'>
                    <div>
                        <button onClick={() => window.location.href = '/news'}
                                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black"
                                aria-current="page">
                            Новости
                        </button>
                    </div>
                    <div>
                        <button onClick={() => window.location.href = '/events'}
                                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black">
                            Мероприятия
                        </button>
                    </div>
                    <div>
                        <button onClick={() => window.location.href = '/society'}
                                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black">
                            Кружки
                        </button>
                    </div>
                    <div>
                        <button onClick={() => window.location.href = '/request'}
                                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-white dark:hover:bg-gray-300 dark:hover:text-black">
                           Заявки
                        </button>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Tabs;