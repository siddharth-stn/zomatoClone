import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage";
import "./css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router";
import CommonLayout from "./components/CommonLayout";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<CommonLayout />}>
                    <Route path="/" element={<Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
