import React from "react";
import DetailedReportButton from "../../atoms/buttons/DetailedReportButton";
import { useLocation } from "react-router-dom";
import { ConstructionReport } from "../../../api/types";

type props = { report: ConstructionReport; reportText: string };

const MainObjectPage = ({ report, reportText }: props) => {
    const location = useLocation();
    const { objectName, reportName, reportDate } = location.state;

    return (
        <div className="flex flex-col items-center justify-center h-[650px] bg-gray-50 p-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Объект {objectName}
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
                    <span className="font-semibold">{report.elements}</span>
                </h3>
                <h3 className="text-lg text-gray-700 mb-4">
                    Количество типов элементов:{" "}
                    <span className="font-semibold">
                        {report.elementsTypes}
                    </span>
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
                <DetailedReportButton report={report} reportText={reportText} />
            </div>
        </div>
    );
};

export default MainObjectPage;
