import React, { useState } from "react";
import CloseIconButton from "../atoms/buttons/CloseIconButton";
import ImageInput from "../atoms/inputs/ImageInput";
import { Api } from "../../api/configuration";
import { ConstructionReport } from "../../api/types";
import ConfirmReportIconButton from "../atoms/buttons/ConfirmReportIconButton";

interface AddReportModalProps {
    onConfirm: (name: string, image?: File) => void; // Добавлен параметр для изображения
    onClose: () => void;
    title?: string;
    objectId: string;
}

const AddReportModal: React.FC<AddReportModalProps> = ({
    onConfirm,
    onClose,
    title,
    objectId,
}) => {
    const [image, setImage] = useState<File[]>([]); // Состояние для изображения
    const [error, setError] = useState<string>("");
    console.log(objectId);
    const handleConfirm = async () => {
        if (image.length === 0) {
            setError("Изображение не может быть пустым");
            return;
        }
        let len = 0;
        image.forEach((i) => (len += i.size));
        console.log(len);
        Api.reports
            .reportCreateApiReportsCreateObjectIdPost(objectId, image, {
                headers: {
                    "Content-Length": len,
                },
            })
            .then(console.log)
            .then(() => onConfirm("asd", image[0]));

        setImage([]); // Сброс изображения
        setError(""); // Сброс ошибки
    };

    return (
        <div className="relative p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="absolute top-2 right-2">
                <CloseIconButton onClick={onClose} />
            </div>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            <div className="grid gap-2">
                <div>
                    <ImageInput
                        onChange={(e) => {
                            setImage(e);
                        }}
                    />
                </div>
                <div className="flex justify-center">
                    <ConfirmReportIconButton onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
};

export default AddReportModal;
