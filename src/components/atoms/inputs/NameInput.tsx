import React from 'react';

interface NameInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    error?: string;
}

const NameInput: React.FC<NameInputProps> = ({ value, onChange, placeholder, label, error }) => {
    return (
        <div className="flex flex-col space-y-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-3 py-2 border ${
                    error ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 ${
                    error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                } focus:border-transparent`}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default NameInput;