import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const CommonLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default CommonLayout;
