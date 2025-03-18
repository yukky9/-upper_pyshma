import React, { useState } from 'react';
import ImagesAlbom from '../atoms/img/ImagesAlbom';
import SafetyMainObjectPage from '../organisms/mainObjectPage/SafetyMainObjectPage';
import MainObjectPage from '../organisms/mainObjectPage/MainObjectPage'; // Импортируем другой компонент для контента
import Header from '../templates/Header';

const SafetyObjectPage = () => {
    const [activeTab, setActiveTab] = useState(0); // Состояние для активной вкладки

    const items = [
        { id: 1, content: <div className="h-[650px] bg-red-500 flex items-center justify-center text-white rounded-lg">Слайд 1</div> },
        { id: 2, content: <div className="h-[650px] bg-blue-500 flex items-center justify-center text-white rounded-lg">Слайд 2</div> },
        { id: 3, content: <div className="h-[650px] bg-green-500 flex items-center justify-center text-white rounded-lg">Слайд 3</div> },
    ];

    const tabs = [
        { id: 0, label: "Контроль выполнения строительно-монтажных работ", href: "/object/:objectName/:reportName" },
        { id: 1, label: "Анализ безопасности строительства", href: "/object/:objectName/:reportName/safety" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-4">
                {/* Вкладки */}
                <div className="mb-8">
                    <div className="sm:hidden">
                        <select
                            id="tabs"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={activeTab}
                            onChange={(e) => setActiveTab(Number(e.target.value))}
                        >
                            {tabs.map((tab) => (
                                <option key={tab.id} value={tab.id}>
                                    {tab.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="w-full focus-within:z-10">
                                <a
                                    href={tab.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab(tab.id);
                                    }}
                                    className={`inline-block w-full p-4 border-r border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 ${
                                        activeTab === tab.id
                                            ? "text-gray-900 bg-gray-100 rounded-s-lg"
                                            : "bg-white hover:text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Основной контент */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <ImagesAlbom items={items} />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        {activeTab === 0 ? (
                            <MainObjectPage /> // Контент для вкладки "Контроль выполнения строительно-монтажных работ"
                        ) : (
                            <SafetyMainObjectPage /> // Контент для вкладки "Анализ безопасности строительства"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyObjectPage;