import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItems from "../../atoms/list/ListItems";
import ListObject from "../listObject/ListObject";
import { Report } from "../../../api/types";

interface ReportData {
    Название: string;
    Дата: string;
    "Количество фотографий": string;
}

const GeneralCards = () => {
    const [selectedReport, setSelectedReport] = useState<string | null>(null);
    const navigate = useNavigate();

    let id = 1;
    const reportData: Report[] = [
        {
            id: id++,
            name: "Отчёт 1",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 2",
            date: `22.12.2001`,
            complete: 50,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 3",
            date: `22.12.2001`,
            complete: 60,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 4",
            date: `22.12.2001`,
            complete: 75,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 5",
            date: `22.12.2001`,
            complete: 35,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 6",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 7",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 8",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 9",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 10",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 11",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 12",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 13",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 14",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 15",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: true,
        },
        {
            id: id++,
            name: "Отчёт 16",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 17",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 18",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 19",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
        {
            id: id++,
            name: "Отчёт 20",
            date: `22.12.2001`,
            complete: 40,
            imageUrls: [],
            fileUrl: "",
            safety: false,
        },
    ];

    const handleTitleClick = (title: string) => {
        setSelectedReport(title);
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
                reportTitles={Array.from(Array(10).keys()).map(
                    (i) => `Отчёт ${i + 1}`
                )}
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
