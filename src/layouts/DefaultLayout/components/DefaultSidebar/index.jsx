import clsx from "clsx";

import {
    DashboardIcon,
    CampaignIcon,
    PaymentIcon,
    WithdrawIcon,
    ProfileIcon,
    LogOutIcon,
    DarkIcon,
} from "@/assets/icons";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
    {
        title: "Dashboard",
        icon: DashboardIcon,
        link: "/",
    },
    {
        title: "Campaign",
        icon: CampaignIcon,
        link: "/campaign",
    },
    {
        title: "Payment",
        icon: PaymentIcon,
        link: "/payment",
    },
    {
        title: "Withdraw",
        icon: WithdrawIcon,
        link: "/withdraw",
    },
    {
        title: "Profile",
        icon: ProfileIcon,
        link: "/profile",
    },
    {
        title: "Logout",
        icon: LogOutIcon,
        link: "/logout",
    },
];

function DefaultSidebar() {
    const hoverClasses =
        "hover:text-primary hover:bg-[#F1FBF7] transition-all duration-300";

    return (
        <div className="sticky top-20 h-[calc(100vh_-_80px)] shrink-0 py-10 px-[14px] max-h-[733px] bg-white md:w-[76px] md:h-[full] w-full shadow-shadowMain rounded-[20px]">
            <ul className="flex flex-col items-center gap-y-5 h-full">
                {sidebarLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                        <li className="" key={index}>
                            <NavLink
                                to={link.link}
                                className={({ isActive }) =>
                                    clsx(
                                        "text-icon flex items-center gap-x-5 rounded-[10px] ",
                                        hoverClasses,
                                        {
                                            "text-primary bg-[#F1FBF7]":
                                                isActive,
                                        }
                                    )
                                }
                            >
                                <div className="md:w-12 md:h-12 flex items-center justify-center">
                                    <IconComponent />
                                </div>
                                <span className="md:hidden">{link.title}</span>
                            </NavLink>
                        </li>
                    );
                })}
                <li className="mt-auto">
                    <button
                        className={`text-icon md:w-12 md:h-12 rounded-[10px] flex items-center justify-center cursor-pointer ${hoverClasses}`}
                    >
                        <DarkIcon />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default DefaultSidebar;
