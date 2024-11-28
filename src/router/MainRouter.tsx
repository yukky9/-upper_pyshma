import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import CreateNews from "../modal_pages/CreateNews";
import CreateEvents from "../modal_pages/CreateEvents";
import CreateSociety from "../modal_pages/CreateSociety";
import FourthPage from "../pages/FourthPage";


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/news" element={<FirstPage/>} />
                <Route path="/events" element={<SecondPage/>} />
                <Route path="/society" element={<ThirdPage/>} />
                <Route path="/request" element={<FourthPage/>} />
                <Route path="/createnewnews" element={<CreateNews/>} />
                <Route path="/createnewevents" element={<CreateEvents/>} />
                <Route path="/createnewsociety" element={<CreateSociety/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;