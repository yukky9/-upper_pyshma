import React, { useEffect, useState } from "react";
import ImagesAlbum from "../atoms/img/ImagesAlbum";
import SafetyMainObjectPage from "../organisms/mainObjectPage/SafetyMainObjectPage";
import MainObjectPage from "../organisms/mainObjectPage/MainObjectPage"; // Импортируем другой компонент для контента
import Header from "../templates/Header";
import { DefaultApi } from "../../gen/api";
import { Config } from "../../api/configuration";
import axios from "axios";

/**
 * SafetyObjectPage - страница отчёта по объекту. Содержит
 * информацию о выполнении строительно-монтажных работ,
 * а также информацию о безопасности строительства.
 *
 * @returns JSX-элемент страницы отчёта
 */
const SafetyObjectPage = () => {
    const [activeTab, setActiveTab] = useState(0); // Состояние для активной вкладки
    const [text, setText] = useState("Загрузка...");
    const api: DefaultApi = new DefaultApi(Config);

    const report = {
        id: 1,
        name: "Отчёт 1",
        date: `22.12.2001`,
        complete: 40,
        imageUrls: [
            "https://cdn-media-1.freecodecamp.org/images/w3CWlvnWqG5VEy6qupnAYvTqECGhPdj3P9Wu",
            "https://cdn-media-1.freecodecamp.org/images/w3CWlvnWqG5VEy6qupnAYvTqECGhPdj3P9Wu",
            "https://cdn-media-1.freecodecamp.org/images/w3CWlvnWqG5VEy6qupnAYvTqECGhPdj3P9Wu",
            "https://cdn-media-1.freecodecamp.org/images/w3CWlvnWqG5VEy6qupnAYvTqECGhPdj3P9Wu",
            "https://cdn-media-1.freecodecamp.org/images/w3CWlvnWqG5VEy6qupnAYvTqECGhPdj3P9Wu",
            "https://cdn-media-1.freecodecamp.org/images/w3CWlvnWqG5VEy6qupnAYvTqECGhPdj3P9Wu",
        ],
        fileUrl: "/testreport.txt",
        safety: false,
    };
    useEffect(() => {
        axios.get(report.fileUrl).then((response) => {
            setText(response.data);
        });
    });

    const items = (report.imageUrls as Array<string>).map(
        (imageUrl, index) => ({
            id: imageUrl,
            content: (
                <img src={imageUrl} alt={`index ${index}`} className="w-full" />
            ),
        })
    );

    const tabs = [
        {
            id: 0,
            label: "Контроль выполнения строительно-монтажных работ",
            href: "/object/:objectName/:reportName",
        },
        {
            id: 1,
            label: "Анализ безопасности строительства",
            href: "/object/:objectName/:reportName/safety",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-4">
                {/* Вкладки */}
                <div className="mb-5">
                    <div className="sm:hidden">
                        <select
                            id="tabs"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={activeTab}
                            onChange={(e) =>
                                setActiveTab(Number(e.target.value))
                            }
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
                            <li
                                key={tab.id}
                                className="w-full focus-within:z-10"
                            >
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
                        <ImagesAlbum items={items} />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        {activeTab === 0 ? (
                            <MainObjectPage report={report} reportText={text} /> // Контент для вкладки "Контроль выполнения строительно-монтажных работ"
                        ) : (
                            <SafetyMainObjectPage
                                report={report}
                                reportText={text}
                            /> // Контент для вкладки "Анализ безопасности строительства"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyObjectPage;
