import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItems from "../../atoms/list/ListItems";
import ListObject from "../listObject/ListObject";
import { ConstructionObject, ConstructionReport } from "../../../api/types";
import { ObjectsApi, ReportsApi } from "../../../gen/api";
import { Api, Config } from "../../../api/configuration";

const GeneralCards = () => {
    const navigate = useNavigate();
    const [reportData, setReportData] = useState<ConstructionReport[]>([]);
    const [objects, setObjects] = useState<ConstructionObject[]>([]);
    const [selectedObject, setSelectedObject] = useState<number | null>(null);

    React.useEffect(() => {
        Api.objects
            .objectsListApiObjectsListGet()
            .then((res) => setObjects(res.data.objects));
    }, []);

    const handleTitleClick = (id: number) => {
        setSelectedObject(id);
        Api.reports
            .reportsListApiReportsListObjectIdGet(objects[id].id)
            .then((res) =>
                setReportData(
                    res.data.reports.map(
                        (el): ConstructionReport => ({
                            id: el.id,
                            name: objects[id].name,
                            date: el.created_at,
                            complete: 0,
                            imageUrls: Array(el.photo_amount).fill("/"),
                            fileUrl: "",
                            safety: el.is_safe === 1,
                            workersGood: 0,
                            workersBad: 0,
                            workersViolations: 0,
                            objectViolations: 0,
                            elements: 0,
                            elementsTypes: 0,
                        })
                    )
                )
            );
    };

    const handleRowClick = (id: number) => {
        const selectedReportData = reportData.find(
            (report) => report.id === id
        );

        navigate(`/object/${objects[selectedObject!].id}/${id}`, {
            state: {
                reportDate: selectedReportData?.date, // Передаём дату
                reportName: selectedReportData?.name, // Передаём название отчёта
                objectName: objects[selectedObject!].name, // Передаём название объекта
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
                    {selectedObject !== null
                        ? objects[selectedObject].name
                        : "Выберите отчёт"}
                </h1>
                <ListObject
                    objectId={
                        selectedObject !== null
                            ? objects[selectedObject].id
                            : ""
                    }
                    reportData={reportData}
                    onRowClick={handleRowClick}
                />
            </div>
        </div>
    );
};

export default GeneralCards;
