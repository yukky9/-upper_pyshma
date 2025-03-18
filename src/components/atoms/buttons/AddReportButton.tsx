import React, { useState } from 'react';
import AddReportModal from '../../modals/AddReportModal';

const AddReportButton = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleConfirm = (name: string) => {
        console.log('Новый отчёт добавлен:', name);
        setIsModalOpen(false);
        window.location.href = "/"; // Перенаправление после подтверждения
    };

    const handleClose = () => {
        console.log('Модальное окно закрыто');
        setIsModalOpen(false);
        window.location.href = "/"; // Перенаправление после закрытия
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
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
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <AddReportModal
                        title="Добавить новый отчёт"
                        onClose={handleClose}
                        onConfirm={handleConfirm}
                    />
                </div>
            )}
        </div>
    );
};

export default AddReportButton;