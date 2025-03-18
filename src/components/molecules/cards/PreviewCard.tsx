import React from 'react';
import StartButton from "../../atoms/buttons/StartButton";

const PreviewCard = () => {
    return (
        <section className="grid border m-10 mx-auto rounded-3xl shadow-2xl max-w-4xl">
            <div className="grid text-center mx-auto p-10 justify-items-center">
                <h2 className="text-8xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 cursor-pointer">
                    Эталон</h2>
                <h1 className="px-8 py-4 text-3xl font-bold leading-none tracking-tight text-gray-900">
                    Система автоматизированного мониторинга строительных объектов
                </h1>
                <p className="px-8 pb-10 text-lg font-normal text-gray-500">
                    Повысить точность и скорость контроля выполнения строительно-монтажных работ, улучшить
                    качество управления строительными проектами за счет автоматизации процессов мониторинга
                    и отчетности.
                </p>
                <StartButton/>
            </div>
        </section>
    );
};

export default PreviewCard;
