import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage";
import "./css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router";
import CommonLayout from "./components/CommonLayout";
import { ChevronUp } from "lucide-react";


createRoot(document.getElementById("root")).render(
  <StrictMode className="relative">
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <a href="/">
      <div className="md:hidden fixed bg-red-400 w-18 h-18 rounded-full bottom-3 right-3 flex items-center justify-center">
        <ChevronUp className="text-white size-8" />
      </div>
    </a>
  </StrictMode>,
);
