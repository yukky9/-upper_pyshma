import React, { useState } from "react";

const ImagesAlbum = ({ items }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // Состояние для анимации

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(0);
    };

    const nextModalSlide = () => {
        if (isAnimating) return; // Если анимация уже выполняется, ничего не делаем
        setIsAnimating(true);
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevModalSlide = () => {
        if (isAnimating) return; // Если анимация уже выполняется, ничего не делаем
        setIsAnimating(true);
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    // Обработчик завершения анимации
    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div className="flex justify-center items-center h-[600px]">
            <div className="relative w-full max-w-5xl overflow-hidden">
                {/* Контейнер слайдов */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item: any, index: number) => (
                        <div
                            key={item.id}
                            className="max-w-full flex-shrink-0 cursor-pointer flex justify-center items-center"
                            onClick={() => openModal(index)}
                        >
                            <div className="max-w-full max-h-[500px] overflow-auto">
                                <img
                                    src={item.content.props.src} // Предполагаем, что item.content — это <img>
                                    alt={`Slide ${index}`}
                                    className="max-w-full object-contain" // Ограничение размера изображения
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Кнопки навигации */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#10095;
                </button>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full z-50"
                        >
                            &times;
                        </button>

                        {/* Контейнер для изображений в модальном окне */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${selectedImageIndex * 100}%)` }}
                            onTransitionEnd={handleAnimationEnd} // Обработчик завершения анимации
                        >
                            {items.map((item: any, index: number) => (
                                <div
                                    key={item.id}
                                    className="min-w-full flex-shrink-0 flex justify-center items-center"
                                >
                                    <div className="max-w-full max-h-[80vh] overflow-auto">
                                        <img
                                            src={item.content.props.src} // Предполагаем, что item.content — это <img>
                                            alt={`Slide ${index}`}
                                            className="max-w-full object-contain" // Ограничение размера изображения
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Кнопки навигации в модальном окне */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevModalSlide();
                            }}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextModalSlide();
                            }}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImagesAlbum;