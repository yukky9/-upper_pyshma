import React, { useState } from "react";
import CloseIconButton from "../atoms/buttons/CloseIconButton";
import SaveButton from "../atoms/buttons/SaveButton";

interface props {
    onConfirm: (name: string, image?: File) => void; // Добавлен параметр для изображения
    onClose: () => void;
    title?: string;
    text: string;
}

const DownloadReportFile = ({ onClose, title, text }: props) => {
    return (
        <div className="relative p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="absolute top-2 right-2">
                <CloseIconButton onClick={onClose} />
            </div>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            <div className="grid gap-2">
                <div>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={4}
                        value={text}
                        className="w-full h-[500px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled
                        style={{ resize: "none" }}
                    />
                </div>
                <div className="flex justify-center">
                    <SaveButton
                        onClick={() => {
                            const blob = new Blob([text], {
                                type: "text/plain",
                            });
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement("a");
                            link.href = url;
                            link.download = `${title}.txt`;
                            link.click();
                            URL.revokeObjectURL(url);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DownloadReportFile;
