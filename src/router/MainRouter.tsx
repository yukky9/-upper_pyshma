import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitoringPage from "../components/pages/MonitoringPage";
import ObjectPage from "../components/pages/ObjectPage";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MonitoringPage />} />
                    <Route
                        path="/object/:objectName/:reportName"
                        element={<ObjectPage />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default MainRouter;
