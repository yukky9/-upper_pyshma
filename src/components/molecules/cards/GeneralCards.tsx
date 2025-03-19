import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItems from "../../atoms/list/ListItems";
import ListObject from "../listObject/ListObject";
import { ConstructionObject, ConstructionReport } from "../../../api/types";
import { wait } from "../../../api/util";

const GeneralCards = () => {
    const [selectedReport, setSelectedReport] = useState<string | null>(null);
    const navigate = useNavigate();
    const [reportData, setReportData] = useState<ConstructionReport[]>([]);
    const [objects, setObjects] = useState<ConstructionObject[]>([]);
    const [selectedObject, setSelectedObject] = useState<number | null>(null);

    React.useEffect(() => {
        wait(100).then(() => {
            setObjects(
                Array(10)
                    .fill(1)
                    .map(
                        (_, index): ConstructionObject => ({
                            id: crypto.randomUUID(),
                            name: `Объект ${index + 1}`,
                        })
                    )
            );
        });
    }, []);

    const handleTitleClick = (id: number) => {
        setSelectedObject(id);
        wait(100).then(() =>
            setReportData(
                Array(10)
                    .fill(1)
                    .map(
                        (_, index): ConstructionReport => ({
                            id: index + 1,
                            name: objects[id].name,
                            date: `22.12.2001`,
                            complete: Math.floor(Math.random() * 100),
                            imageUrls: [],
                            fileUrl: "",
                            safety: Math.random() < 0.5,
                            workersGood: Math.floor(Math.random() * 50),
                            workersBad: Math.floor(Math.random() * 50),
                            workersViolations: Math.floor(Math.random() * 20),
                            objectViolations: Math.floor(Math.random() * 20),
                            elements: Math.floor(Math.random() * 100),
                            elementsTypes: Math.floor(Math.random() * 10),
                        })
                    )
            )
        );
    };

    const handleRowClick = (id: number) => {
        const selectedReportData = reportData.find(
            (report) => report.id === id
        );

        navigate(`/object/${selectedReport}/${id}`, {
            state: {
                reportDate: selectedReportData?.date, // Передаём дату
                reportName: selectedReportData?.name, // Передаём название отчёта
                objectName: selectedReport, // Передаём название объекта
                completionPercentage: selectedReportData?.complete, // Передаём процент завершённости
            },
        });
    };

    return (
        <div className="flex mx-auto ml-10 mr-10 rounded-lg shadow-lg border">
            <ListItems
                reportTitles={objects.map((i) => i.name)}
                onTitleClick={handleTitleClick}
            />
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-semibold mb-4">
                    {selectedReport || "Выберите отчёт"}
                </h1>
                <ListObject
                    reportData={reportData}
                    onRowClick={handleRowClick}
                />
            </div>
        </div>
    );
};

export default GeneralCards;
