import React from 'react';
import Header from "../templates/Header";
import MainObjectPage from "../organisms/mainObjectPage/MainObjectPage";
import {useParams} from "react-router-dom";
import ImagesAlbom from "../atoms/img/ImagesAlbom";

const ObjectPage = () => {
    const { name } = useParams();

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <ImagesAlbom/>
                </div>
                <main className="bg-white p-4 rounded-lg shadow">
                    <MainObjectPage objectName={name} />
                </main>
            </div>
        </div>
    );
};

export default ObjectPage;
