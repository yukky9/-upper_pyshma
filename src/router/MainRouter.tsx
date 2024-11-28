import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import CreateNews from "../modal_pages/CreateNews";
import CreateSocietyAndEvents from "../modal_pages/CreateSocietyAndEvents";


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/news" element={<FirstPage/>} />
                <Route path="/events" element={<SecondPage/>} />
                <Route path="/society" element={<ThirdPage/>} />
                <Route path="/createnewnews" element={<CreateNews/>} />
                <Route path="/createnew" element={<CreateSocietyAndEvents/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;