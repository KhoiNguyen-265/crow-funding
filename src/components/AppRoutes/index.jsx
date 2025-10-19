import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import SignUp from "../../modules/auth/pages/SignUp";
import SignIn from "../../modules/auth/pages/SignIn";
import DefaultLayout from "../../layouts/DefaultLayout";
import Dashboard from "../../modules/dashboard/pages/Dashboard";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth Layout */}
                <Route element={<AuthLayout />}>
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="sign-in" element={<SignIn />} />
                </Route>

                {/* Dashboard Layout */}
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
