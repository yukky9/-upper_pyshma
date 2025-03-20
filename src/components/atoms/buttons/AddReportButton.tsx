import React, { useState } from "react";
import AddReportModal from "../../modals/AddReportModal";
import { ConstructionReport } from "../../../api/types";
import { useNavigate } from "react-router-dom";
type params = {
    onConfirm: (a: number) => void;
    objectId: string;
};
const AddReportButton = ({ objectId, onConfirm }: params) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleConfirm = (name: number) => {
        console.log("Новый отчёт добавлен:", name);
        setIsModalOpen(false);
        // navigate("/?objectId=" + objectId, {
        //     state: { objectId: objectId },
        //     preventScrollReset: true,
        // });
        onConfirm(name);
    };

    const handleClose = () => {
        console.log("Модальное окно закрыто");
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                type="button"
                onClick={
                    objectId === "" ? undefined : () => setIsModalOpen(true)
                }
                disabled={objectId === ""}
                className="w-full h-11 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-gray-50"
            >
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.22229 5.0001H8.77785M5.00007 8.77788V1.22232"
                        stroke="#101828"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isModalOpen ? (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <AddReportModal
                        title="Добавить новый отчёт"
                        onClose={handleClose}
                        onConfirm={handleConfirm}
                        objectId={objectId}
                    />
                </div>
            ) : undefined}
        </div>
    );
};

export default AddReportButton;
