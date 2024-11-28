import React from 'react';
import SendButton from "../components/buttons/SendButton/SendButton";
import TimeInput from "../components/Inputs/TimeInput/TimeInput";
import AddImg from "../components/add_img/AddImg";

const CreateEvents = () => {
    return (
        <div className="place-items-center place-content-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-black">
                            Создание нового мероприятия!
                        </h3>
                        <button type="button" onClick={() => window.location.href = '/events'}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5">
                        <AddImg/>
                        <div className="grid gap-4 mb-4 mt-3 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900">Название</label>
                                <input type="text" name="name" id="name"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       placeholder="Введите название..."/>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900">Описание</label>
                                <textarea id="description"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                          placeholder="Введите описание..."></textarea>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900">Дата/время</label>
                                <TimeInput/>
                            </div>
                        </div>
                        <SendButton/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateEvents;