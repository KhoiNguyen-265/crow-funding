import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import SignUp from "../../modules/auth/pages/SignUp";
import SignIn from "../../modules/auth/pages/SignIn";
import DefaultLayout from "../../layouts/DefaultLayout";
import Dashboard from "../../modules/dashboard/pages/Dashboard";
import Campaign from "../../modules/campaign/pages/Campaign";
import CampaignAddNew from "../../modules/campaign/pages/CampaignAddNew";
import Dropdown from "../Dropdown";

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
                    <Route path="/campaign" element={<Campaign />} />
                    <Route
                        path="/campaign-add-new"
                        element={<CampaignAddNew />}
                    />
                </Route>

                <Route path="/dropdown" element={<Dropdown />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
