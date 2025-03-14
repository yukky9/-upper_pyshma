import React from 'react';

interface ListObjectProps {
    reportData?: any
}

const ListObject = ({reportData}: ListObjectProps) => {
    if (!reportData) {
        return <p>Выберите отчёт слева.</p>;
    }

    if (reportData.length === 0) {
        return <p>Нет данных для этого отчёта.</p>;
    }

    const headers = Object.keys(reportData[0]);

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto h-[700px]">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {reportData.map((row: any, index: any) => (
                    <tr key={index}
                        className="bg-white border-b hover:bg-gray-50">
                        {headers.map((header, headerIndex) => (
                            <td key={headerIndex} className="px-6 py-4">
                                {row[header]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListObject;