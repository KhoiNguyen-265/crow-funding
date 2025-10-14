import { Outlet } from "react-router-dom";

import ellipse from "@/assets/icons/ellipse.svg";

function AuthLayout() {
    return (
        <div className="relative w-full min-h-screen p-10 bg-lite isolate">
            <img
                src={ellipse}
                alt=""
                className="absolute bottom-0 right-0 z-[-1] w-full"
            />
            <Outlet />
        </div>
    );
}

export default AuthLayout;
