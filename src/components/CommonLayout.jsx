import { Outlet } from "react-router";

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
