import React, { useState } from 'react';
import CloseIconButton from '../atoms/buttons/CloseIconButton';
import ConfirmReportIconButton from '../atoms/buttons/ConfirmReportIconButton';
import ImageInput from '../atoms/inputs/ImageInput';

interface AddReportModalProps {
    onConfirm: (name: string, image?: File) => void; // Добавлен параметр для изображения
    onClose: () => void;
    title?: string;
}

const AddReportModal: React.FC<AddReportModalProps> = ({ onConfirm, onClose, title }) => {
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<File | null>(null); // Состояние для изображения
    const [error, setError] = useState<string>('');

    const handleConfirm = () => {
        if (!name.trim()) {
            setError('Название отчёта не может быть пустым');
            return;
        }

        onConfirm(name, image || undefined); // Передаем имя и изображение (если есть)
        setName(''); // Сброс имени
        setImage(null); // Сброс изображения
        setError(''); // Сброс ошибки
    };

    const handleImageChange = (file: File) => {
        setImage(file); // Обновляем состояние изображения
    };

    return (
        <div className="relative p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="absolute top-2 right-2">
                <CloseIconButton onClick={onClose} />
            </div>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            <div className="grid gap-2">
                <div>
                    <ImageInput onChange={handleImageChange} />
                </div>
                <div className="flex justify-center">
                    <ConfirmReportIconButton onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
};

export default AddReportModal;