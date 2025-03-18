import React from 'react';
import Header from "../templates/Header";
import MainObjectPage from "../organisms/mainObjectPage/MainObjectPage";
import {useParams} from "react-router-dom";
import ImagesAlbom from "../atoms/img/ImagesAlbom";

const ObjectPage = () => {
    const { objectName, reportName } = useParams();

    const items = [
        { id: 1, content: <div className="h-[650px] bg-red-500 flex items-center justify-center text-white rounded-lg">Слайд 1</div> },
        { id: 2, content: <div className="h-[650px] bg-blue-500 flex items-center justify-center text-white rounded-lg">Слайд 2</div> },
        { id: 3, content: <div className="h-[650px] bg-green-500 flex items-center justify-center text-white rounded-lg">Слайд 3</div> },
    ];

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <ImagesAlbom items={items}/>
                </div>
                <main className="bg-white p-4 rounded-lg shadow">
                    <MainObjectPage/>
                </main>
            </div>
        </div>
    );
};

export default ObjectPage;
