import React, { useState } from "react";
import DownloadReportFile from "../../modals/DownloadReportFile";
import { ConstructionReport } from "../../../api/types";

type props = {
    reportText: string;
    report: ConstructionReport;
};

const DetailedReportButton = ({ report, reportText }: props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleConfirm = (name: string) => {
        console.log("Confirmed:", name);
        setIsModalOpen(false);
    };

    const handleClose = () => {
        console.log("Modal closed");
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
            >
                Подробный отчёт
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <DownloadReportFile
                        title={report.name}
                        text={reportText}
                        onClose={handleClose}
                        onConfirm={handleConfirm}
                    />
                </div>
            )}
        </div>
    );
};

export default DetailedReportButton;
