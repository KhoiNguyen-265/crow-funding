import { Outlet } from "react-router-dom";
import DefaultTopBar from "@/layouts/DefaultLayout/components/DefaultTopBar";
import DefaultSidebar from "@/layouts/DefaultLayout/components/DefaultSidebar";

function DefaultLayout() {
    return (
        <div className="bg-lite">
            <DefaultTopBar />
            <div className="p-10">
                <DefaultSidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default DefaultLayout;
