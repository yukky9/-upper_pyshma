import React from "react";
import AddReportButton from "../../atoms/buttons/AddReportButton";
import Indicators from "../../atoms/indicators/Indicators";
import { ConstructionReport } from "../../../api/types";

interface ListObjectProps {
    objectId: string;
    reportData?: ConstructionReport[]; // Уточнение типа для reportData
    onRowClick?: (reportName: number) => void; // Функция для обработки клика по строке
    onReportAdd: (a: number) => void;
}

const names = {
    ID: "id",
    // Название: "name",
    Дата: "date",
    Завершенность: "complete",
    "Проверка безопасности": "safety",
};

const ListObject = ({
    reportData,
    onRowClick,
    objectId,
    onReportAdd,
}: ListObjectProps) => {
    // Если reportData не передан, показываем сообщение
    if (!reportData) {
        return <p className="text-gray-500">Выберите объект слева.</p>;
    }

    // Если данные пустые, показываем сообщение
    // if (reportData.length === 0) {
    //     return <p className="text-gray-500">Нет данных для этого объекта.</p>;
    // }

    // Получаем заголовки таблицы из ключей первого элемента
    const headers = Object.keys(names);

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto h-[700px]">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="px-6 py-3 text-center align-middle" // Выравнивание по центру
                            >
                                {header}
                            </th>
                        ))}

                        {/* Кнопка добавления отчёта */}
                        <th
                            scope="col"
                            className="px-6 py-3 text-center align-middle" // Выравнивание по центру
                        >
                            <AddReportButton
                                objectId={objectId}
                                onConfirm={onReportAdd}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((row, index) => {
                        return (
                            <tr
                                key={index}
                                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                                onClick={
                                    onRowClick
                                        ? () => onRowClick(row.id)
                                        : undefined
                                } // Обработка клика по строке
                            >
                                {headers.map((header, headerIndex) => (
                                    <td
                                        key={headerIndex}
                                        className="px-6 py-4 text-center align-middle" // Выравнивание по центру
                                    >
                                        {
                                            /* @ts-ignore */
                                            typeof row[names[header]] ===
                                            "boolean" ? (
                                                <div className="flex justify-center items-center">
                                                    {" "}
                                                    {/* Контейнер для центрирования индикатора */}
                                                    <Indicators
                                                        isSafe={row.safety}
                                                    />
                                                </div>
                                            ) : (
                                                /* @ts-ignore */
                                                row[names[header]]
                                            )
                                        }
                                    </td>
                                ))}

                                {/* Пустая ячейка для выравнивания с кнопкой в заголовке */}
                                <td className="px-6 py-4 text-center align-middle"></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListObject;
