import { FolderIcon } from "@/assets/icons";
import clsx from "clsx";
import { Link } from "react-router-dom";

function CampaignCategory({ children, size = "normal" }) {
    const iconSizeClasses = {
        normal: "w-[15px] h-[12px]",
        large: "w-5 h-4",
    };
    return (
        <Link
            to="/"
            className={clsx(
                "flex items-baseline gap-x-[10px] font-medium text-text3",
                {
                    "text-xs": size === "normal",
                    "text-sm": size === "large",
                }
            )}
        >
            <FolderIcon className={iconSizeClasses[size]} />
            {children}
        </Link>
    );
}

export default CampaignCategory;
