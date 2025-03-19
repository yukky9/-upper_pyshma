import React from "react";
import AddIconButton from "../buttons/AddIconButton";

interface ListItemsProps {
    reportTitles: string[];
    onTitleClick: (index: number) => void;
}

const ListItems: React.FC<ListItemsProps> = ({
    reportTitles,
    onTitleClick,
}) => {
    return (
        <div className="w-80 bg-gray-50 p-4">
            <h2 className="text-3xl font-semibold mb-4">Объекты</h2>
            <div className="overflow-y-auto h-[600px]">
                <ul>
                    {reportTitles.map((title: string, index: number) => (
                        <li
                            key={index}
                            className="py-2 cursor-pointer hover:bg-gray-200 rounded"
                            onClick={() => onTitleClick(index)}
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
            <AddIconButton />
        </div>
    );
};

export default ListItems;
