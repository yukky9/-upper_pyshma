import React, { useState } from "react";
import ConfirmIconButton from "../atoms/buttons/ConfirmIconButton";
import CloseIconButton from "../atoms/buttons/CloseIconButton"; // Assume this component exists
import NameInput from "../atoms/inputs/NameInput";
import { Api } from "../../api/configuration";

interface AddNewObjectModalProps {
    onConfirm: (name: string) => void;
    onClose: () => void;
    title?: string;
}

const AddNewObjectModal: React.FC<AddNewObjectModalProps> = ({
    onConfirm,
    onClose,
    title,
}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleConfirm = () => {
        if (!name.trim()) {
            setError("Name is required");
            return;
        }
        if (name.length < 3) {
            setError("Name must be at least 3 characters");
            return;
        }
        setError("");
        Api.objects
            .objectCreateApiObjectsCreatePost({
                name,
            })
            .then((res) => {
                console.log(res);
                onConfirm(name);
            })
            .catch((err) => {
                console.log(err);
                setError("Произошла ошибка");
            });
        window.location.reload();
    };

    return (
        <div className="relative p-6 bg-white rounded-lg shadow-md">
            <div className="absolute top-2 right-2">
                <CloseIconButton onClick={onClose} />
            </div>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            <div className="grid grid-rows-2 gap-4">
                <div>
                    <NameInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Напишите название..."
                        label="Название объекта"
                        error={error}
                    />
                </div>
                <div>
                    <ConfirmIconButton onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
};

export default AddNewObjectModal;
