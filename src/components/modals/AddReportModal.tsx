import React, { useState } from 'react';
import CloseIconButton from '../atoms/buttons/CloseIconButton';
import ConfirmIconButton from '../atoms/buttons/ConfirmIconButton';
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
            setError('Name is required');
            return;
        }
        if (name.length < 3) {
            setError('Name must be at least 3 characters');
            return;
        }
        setError('');
        onConfirm(name, image || undefined); // Передаем имя и изображение (если есть)
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
            <div className="grid gap-4">
                <div>
                    <ImageInput onChange={handleImageChange} />
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Напишите название отчёта..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                </div>
                <div className="flex justify-end">
                    <ConfirmIconButton onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
};

export default AddReportModal;