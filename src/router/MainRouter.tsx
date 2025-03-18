import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralPage from "../components/pages/GeneralPage";
import MonitoringPage from "../components/pages/MonitoringPage";
import ObjectPage from "../components/pages/ObjectPage";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<GeneralPage />} />
                    <Route path="/monitoring" element={<MonitoringPage />} />
                    <Route path="/object/:name" element={<ObjectPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default MainRouter;
