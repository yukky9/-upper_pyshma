import React from "react";
import { useLocation } from "react-router-dom";
import DetailedReportButton from "../../atoms/buttons/DetailedReportButton";
import Indicators from "../../atoms/indicators/Indicators";

const SafetyMainObjectPage = () => {
    const location = useLocation();
    const { objectName, reportName, reportDate, completionPercentage, isSafe } =
        location.state;

    return (
        <div className="flex flex-col items-center justify-center h-[650px] bg-gray-50 p-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Объект: {objectName}
                </h1>
                <h2 className="text-xl text-gray-600 mt-2">{reportName}</h2>
                <h3 className="text-lg text-gray-500 mt-1">{reportDate}</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mx-auto w-full max-w-2xl">
                <h3 className="text-lg text-gray-700 mb-4">
                    Количество снимков: <span className="font-semibold">5</span>
                </h3>
                <h3 className="text-lg text-gray-700 mb-4">
                    Количество распознанных элементов:{" "}
                    <span className="font-semibold">5</span>
                </h3>
                <h3 className="text-lg text-gray-700 mb-4">
                    Количество типов элементов:{" "}
                    <span className="font-semibold">2</span>
                </h3>
                <div className="mt-8">
                    <h2 className="text-xl text-gray-800 font-semibold">
                        Процент завершенности:{" "}
                        <span className="text-blue-600">
                            {completionPercentage}
                        </span>
                    </h2>
                </div>
                <div className="mt-6 flex items-center gap-3">
                    <h2 className="text-xl text-gray-800 font-semibold">
                        Проверка безопасности:
                    </h2>
                    <Indicators isSafe={isSafe} />
                </div>
            </div>

            {/* Кнопка */}
            <div className="flex justify-center mt-8">
                <DetailedReportButton />
            </div>
        </div>
    );
};

export default SafetyMainObjectPage;
