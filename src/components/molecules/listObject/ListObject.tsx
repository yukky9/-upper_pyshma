import React from 'react';
import AddReportButton from '../../atoms/buttons/AddReportButton';
import Indicators from '../../atoms/indicators/Indicators';

interface ListObjectProps {
    reportData?: any; // Уточнение типа для reportData
    onRowClick?: (reportName: string) => void; // Функция для обработки клика по строке
}

const ListObject = ({ reportData, onRowClick }: ListObjectProps) => {
    const isSafe = true;
    // Если reportData не передан, показываем сообщение
    if (!reportData) {
        return <p className="text-gray-500">Выберите отчёт слева.</p>;
    }

    // Если данные пустые, показываем сообщение
    if (reportData.length === 0) {
        return <p className="text-gray-500">Нет данных для этого отчёта.</p>;
    }

    // Получаем заголовки таблицы из ключей первого элемента
    const headers = Object.keys(reportData[0]);

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto h-[700px]">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {header}
                        </th>
                    ))}
                    {/* Индикатор статуса */}
                    <th scope="col" className="px-6 py-3 text-center">
                        Проверка безопасности
                    </th>
                    {/* Кнопка добавления отчёта */}
                    <th scope="col" className="px-6 py-3">
                        <AddReportButton />
                    </th>
                </tr>
                </thead>
                <tbody>
                {reportData.map((row:any, index:any) => {

                    return (
                        <tr
                            key={index}
                            className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                            onClick={() => onRowClick && onRowClick(row["Название"])} // Обработка клика по строке
                        >
                            {headers.map((header, headerIndex) => (
                                <td key={headerIndex} className="px-6 py-4">
                                    {row[header]}
                                </td>
                            ))}
                            {/* Индикатор статуса для каждой строки */}
                            <td className="px-6 py-4 text-center">
                                <div className="flex justify-center items-center">
                                    <Indicators isSafe={isSafe}/>
                                </div>
                            </td>
                            {/* Пустая ячейка для выравнивания с кнопкой в заголовке */}
                            <td className="px-6 py-4"></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default ListObject;