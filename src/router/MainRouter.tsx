import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;