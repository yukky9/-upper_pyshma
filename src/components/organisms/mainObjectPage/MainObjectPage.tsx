import React from "react";
import DetailedReportButton from "../../atoms/buttons/DetailedReportButton";
import { useLocation } from "react-router-dom";
import { Report } from "../../../api/types";

type props = { report: Report };

const MainObjectPage = ({ report }: props) => {
    const location = useLocation();
    const { objectName, reportName, reportDate, completionPercentage } =
        location.state;
    const isSafe = true;

    return (
        <div className="flex flex-col h-[650px] bg-gray-50 p-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Объект: {objectName}
                </h1>
                <h2 className="text-xl text-gray-600 mt-2">{reportName}</h2>
                <h3 className="text-lg text-gray-500 mt-1">{reportDate}</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mx-auto w-full max-w-2xl">
                <h3 className="text-lg text-gray-700 mb-4">
                    Количество снимков:{" "}
                    <span className="font-semibold">
                        {report.imageUrls.length}
                    </span>
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
                            {report.complete}%
                        </span>
                    </h2>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <DetailedReportButton />
            </div>
        </div>
    );
};

export default MainObjectPage;
