import React, {useState} from 'react';
import AddReportModal from '../../modals/AddReportModal';

interface ConfirmReportIconButtonProps {
    onClick?: () => void,
    onClose?: () => void
}

const ConfirmReportIconButton = ({onClick, onClose}: ConfirmReportIconButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleConfirm = () => {
        window.location.href = "/";
        setIsModalOpen(false);
    };

    const handleClose = () => {
        window.location.href = "/";
        setIsModalOpen(false);
    };


    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}
                    className="bg-green-500 w-96 h-11 mt-10 border border-green-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 12.4434L8.14339 16.5868C8.81006 17.2535 9.14339 17.5868 9.5576 17.5868C9.97182 17.5868 10.3051 17.2535 10.9718 16.5868L20.001 7.55762"
                        stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                </svg>
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <AddReportModal
                        onConfirm={handleConfirm}
                        onClose={handleClose}
                        title="Добавить новый отчёт"
                    />
                </div>
            )}
        </div>
    );
};

export default ConfirmReportIconButton;