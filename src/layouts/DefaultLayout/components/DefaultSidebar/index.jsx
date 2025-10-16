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
        <div className="py-10 px-[14px] bg-white md:w-[76px] md:h-[full] w-full shadow-shadowMain rounded-[20px]">
            <ul className="flex flex-col items-center gap-y-5 ">
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
                <li>
                    <button
                        className={`text-icon mt-auto md:w-12 md:h-12 rounded-[10px] flex items-center justify-center cursor-pointer ${hoverClasses}`}
                    >
                        <DarkIcon />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default DefaultSidebar;
