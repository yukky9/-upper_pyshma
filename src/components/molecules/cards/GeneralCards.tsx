import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ListItems from "../../atoms/list/ListItems";
import ListObject from "../listObject/ListObject";
import { ConstructionObject, ConstructionReport } from "../../../api/types";
import { Api } from "../../../api/configuration";
import { wait } from "@testing-library/user-event/dist/utils";

/**
 * GeneralCards component renders a list of objects on the left side and a list of reports
 * associated with the selected object on the right side. When a user clicks on an object title,
 * the component fetches the list of reports associated with the object from the API and
 * transforms the data into the ConstructionReport format. The component stores the fetched
 * data in the state and renders the list of reports.
 *
 * The component also handles the click event on a report row, navigating to the
 * /object/:objectId/:reportId route and passing the report data as a state.
 */
const GeneralCards = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [reportData, setReportData] = useState<ConstructionReport[]>([]);
    const [objects, setObjects] = useState<ConstructionObject[]>([]);
    const [selectedObject, setSelectedObject] = useState<number | null>(null);

    React.useEffect(() => {
        Api.objects.objectsListApiObjectsListGet().then(async (rs) => {
            setObjects(rs.data.objects);
            if (location.state && location.state.objectId) {
                const id = objects.findIndex(
                    (obj) => obj.id === location.state.objectId
                );
                if (id === -1) {
                    return;
                }
                await handleTitleClick(id);
            }
        });
    }, [location.state]);

    /**
     * Handles the click event on an object title, fetching and setting the report data
     * for the selected object.
     *
     * @param {number} id - The index of the selected object in the objects array.
     *
     * This function sets the selected object by its index and retrieves the list of
     * reports associated with the object from the API. The fetched data is then
     * transformed into the ConstructionReport format and stored in the state.
     */
    const handleTitleClick = async (id: number) => {
        setSelectedObject(id);
        wait(100).then(() =>
            Api.reports
                .reportsListApiReportsListObjectIdGet(objects[id].id)
                .then((res) => {
                    console.log(res.data.reports.length);
                    setReportData(
                        res.data.reports.map(
                            (el): ConstructionReport => ({
                                id: el.id,
                                name: objects[id].name,
                                date: el.created_at,
                                complete: el.completeness,
                                imageUrls: [],
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
                    );
                })
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
                    onReportAdd={() => {
                        handleTitleClick(selectedObject!);
                    }}
                />
            </div>
        </div>
    );
};

export default GeneralCards;
