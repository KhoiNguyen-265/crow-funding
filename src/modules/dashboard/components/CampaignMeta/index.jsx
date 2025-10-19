import clsx from "clsx";
import CampaignDesc from "../CampaignDesc";

function CampaignMeta({
    quantity = "",
    desc = "",
    size = "normal",
    className = "",
}) {
    const sizes = {
        normal: "text-xs lg:text-sm",
        large: "text-base lg:text-xl",
    };

    return (
        <div className={`flex flex-col gap-y-[5px] ${className}`}>
            <p>
                <strong className={clsx("font-semibold", sizes[size])}>
                    {quantity}
                </strong>
            </p>
            <CampaignDesc
                className={clsx({
                    "text-xs": size === "normal",
                    "text-sm lg:text-base": size === "large",
                })}
            >
                {desc}
            </CampaignDesc>
        </div>
    );
}

export default CampaignMeta;
