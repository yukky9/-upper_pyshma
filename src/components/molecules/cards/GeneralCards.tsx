import React, { useState } from 'react';
import ListItems from '../../atoms/list/ListItems';
import ListObject from '../listObject/ListObject';

interface ReportData {
    name: string;
    date: string;
    procent: string;
}

interface ReportDataType {
    [key: string]: ReportData[];
}

const GeneralCards = () => {
    const [selectedReport, setSelectedReport] = useState<string | null>(null);

    const reportTitles = ['Объект 1', 'Объект 2', 'Объект 3', 'Объект 4', 'Объект 5', 'Объект 6','Объект 7',
        'Объект 8', 'Объект 9','Объект 10', 'Объект 11', 'Объект 12','Объект 13', 'Объект 14', 'Объект 15','Объект 16',
        'Объект 17', 'Объект 18', 'Объект 19', 'Объект 20'];

    const reportData: ReportDataType = {
        'Объект 1': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 2': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 3': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 4': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 5': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 6': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 7': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 8': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 9': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 10': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 11': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 12': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 13': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 14': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 15': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 16': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 17': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 18': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 19': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" }
        ],
        'Объект 20': [
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
            { name: "Отчёт 1", date: `22.12.2001`, procent: "40%" },
        ],
    };


    const handleTitleClick = (title: string) => {
        setSelectedReport(title);
    };

    return (
        <div className="flex mx-auto ml-10 mr-10 rounded-lg shadow-lg border">
            <ListItems reportTitles={reportTitles} onTitleClick={handleTitleClick} />
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-semibold mb-4">{selectedReport || "Выберите отчёт"}</h1>
                <ListObject reportData={reportData[selectedReport as string] || []} />
            </div>
        </div>
    );
};

export default GeneralCards;